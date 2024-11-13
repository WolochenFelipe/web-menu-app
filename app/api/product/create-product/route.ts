import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
    try {
        const { name, description, notices, nutricionalTable, menu, category } = await request.json()

        if (!menu) {
            return NextResponse.json({ error: 'Menu is required' }, { status: 400 })
        }

        const computedMenu = await prisma.menu.findUnique({
            where: { subdomain: menu },
        })

        if (!computedMenu) {
            return NextResponse.json({ error: 'Valid menu is required' }, { status: 400 })
        }

        const computedCategory = await prisma.category.findFirst({
            where: { id: category, menuId: computedMenu.id },
        })

        if (!name || !description) {
            return NextResponse.json({ error: 'Name and description are required' }, { status: 400 })
        }

        if (!computedCategory) {
            return NextResponse.json({ error: 'Category not found' }, { status: 400 })
        }

        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                notices,
                nutricionalTable,
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
