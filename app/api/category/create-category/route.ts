import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { type CategorySchema } from '@/app/components/category/create-category'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const { name, description, image, menu } = Object.fromEntries(formData) as CategorySchema & { menu: string }

        if (!menu) {
            return NextResponse.json({ error: 'Menu is required' }, { status: 400 })
        }

        const computedMenu = await prisma.menu.findUnique({
            where: { subdomain: menu },
        })

        if (!name || !description || !computedMenu || !computedMenu.id) {
            return NextResponse.json({ error: 'Name, description, and a valid menu ID are required' }, { status: 400 })
        }
        if (!image) {
            return NextResponse.json({ error: 'Image is required' }, { status: 400 })
        }
        const uniqueFileName = `${crypto.randomUUID()}-${image.name}`;

        const response = await fetch(`${process.env.KINDE_SITE_URL}/api/presigned-url`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ key: uniqueFileName })
        })

        const { signedUrl } = await response.json()

        const imageUploadRequest = await fetch(signedUrl, {
            method: 'PUT',
            headers: {
                "Content-Type": image.type,
                "Accepted": "application/json"
            },
            body: image
        })


        const newCategory = await prisma.category.create({
            data: {
                name,
                description,
                icon: `${process.env.CLOUDFLARE_BUCKET_URL}/${uniqueFileName}`,
                menuId: computedMenu.id,
            },
        })

        return NextResponse.json(newCategory, { status: 201 })
    } catch (error) {
        console.error('Error creating Category:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

