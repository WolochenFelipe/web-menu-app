import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
    try {
        const { name, description, notices, nutricionaltable, menu, category } = await request.json()

        if (!menu) {
            return NextResponse.json({ error: 'Menu is required' }, { status: 400 })
        }

        const computedMenu = await prisma.menu.findUnique({
            where: { subdomain: menu },
        })
        const computedCategory = await prisma.category.findUnique({
            where: { id: category }
        })

        if (!name || !description || !computedMenu || !computedMenu.id) {
            return NextResponse.json({ error: 'Name, description, and a valid menu ID are required' }, { status: 400 })
        }

        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                notices,
                nutricionaltable,
                categoryId: computedCategory,
                menuId: computedMenu.id,
            },
        })

        return NextResponse.json(newProduct, { status: 201 })
    } catch (error) {
        console.error('Error creating product:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
