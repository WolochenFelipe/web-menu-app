import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PUT(request: NextRequest) {
    try {
        const { name, description, notices, nutricionalTable, menu, id } = await request.json()

        if (!menu) {
            return NextResponse.json({ error: 'Menu is required' }, { status: 400 })
        }

        const computedMenu = await prisma.menu.findUnique({
            where: { subdomain: menu },
        })

        if (!computedMenu || !computedMenu.id) {
            return NextResponse.json({ error: 'Valid menu is required' }, { status: 400 })
        }

        const computedCategory = await prisma.product.findUnique({
            where: { id: id, menuId: computedMenu.id },
        })

        if (!name || !description) {
            return NextResponse.json({ error: 'Name and description are required' }, { status: 400 })
        }

        if (!computedCategory || !computedCategory.id) {
            return NextResponse.json({ error: 'Category not found' }, { status: 400 })
        }

        const updateProduct = await prisma.product.update({
            where: {
                menuId: computedMenu.id,
                id: computedCategory.id
            },
            data: {
                name,
                description,
                notices,
                nutricionalTable,
            },
        })

        return NextResponse.json(updateProduct, { status: 201 })
    } catch (error) {
        console.error('Error creating product:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
