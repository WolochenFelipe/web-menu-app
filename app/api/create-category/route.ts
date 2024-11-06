import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
    try {
        const { name, description, menu } = await request.json()

        if (!menu) {
            return NextResponse.json({ error: 'Menu is required' }, { status: 400 })
        }

        const computedMenu = await prisma.menu.findUnique({
            where: { subdomain: menu },
        })

        if (!name || !description || !computedMenu || !computedMenu.id) {
            return NextResponse.json({ error: 'Name, description, and a valid menu ID are required' }, { status: 400 })
        }

        const newCategory = await prisma.category.create({
            data: {
                name,
                description,
                menuId: computedMenu.id,
            },
        })

        return NextResponse.json(newCategory, { status: 201 })
    } catch (error) {
        console.error('Error creating Category:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
