import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PUT(request: NextRequest) {
    try {
        const { name, description, menu, id } = await request.json()

        if (!menu) {
            return NextResponse.json({ error: 'Menu is required' }, { status: 400 })
        }

        const computedMenu = await prisma.menu.findUnique({
            where: { subdomain: menu },
        })

        if (!name || !description || !computedMenu || !computedMenu.id) {
            return NextResponse.json({ error: 'Name, description, and a valid menu ID are required' }, { status: 400 })
        }

        const updateCategory = await prisma.category.update({
            where: {
                menuId: computedMenu.id,
                id: id
            },
            data: {
                name: name,
                description: description
            },
        })

        return NextResponse.json(updateCategory, { status: 201 })
    } catch (error) {
        console.error('Error creating Category:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
