import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { type productSchema } from '@/app/components/product/create-product'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const { name, description, price, notices, categoria, nutricionalTable, image, menu } = Object.fromEntries(formData) as productSchema & { menu: string }
        console.log("AIAIAI")
        if (!menu) {
            return NextResponse.json({ error: 'Menu is required' }, { status: 400 })
        }

        const computedMenu = await prisma.menu.findUnique({
            where: { subdomain: menu },
        })

        if (!computedMenu) {
            return NextResponse.json({ error: 'Valid menu is required' }, { status: 400 })
        }

        const computedCategory = await prisma.category.findUnique({
            where: { id: categoria, menuId: computedMenu.id },
        })

        if (!name || !description) {
            return NextResponse.json({ error: 'Name and description are required' }, { status: 400 })
        }

        if (!computedCategory) {
            return NextResponse.json({ error: 'Category not found' }, { status: 400 })
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

        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                price,
                notices,
                nutricionalTable,
                image: `${process.env.CLOUDFLARE_BUCKET_URL}/${uniqueFileName}`,
                categoryId: computedCategory.id,
                menuId: computedMenu.id,
            },
        })

        return NextResponse.json(newProduct, { status: 201 })
    } catch (error) {
        console.error('Error creating product:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
