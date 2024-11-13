// app/api/create-tenant/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function PUT(request: NextRequest) {

    const { getUser } = getKindeServerSession()
    const kindeUser = await getUser()

    try {
        const { name, subdomain, id } = await request.json()

        let userRec = await prisma.user.findUnique({
            where: { kindeId: kindeUser.id }
        })

        if (!userRec || !userRec.id) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        if (!id) {
            return NextResponse.json({ error: 'id not found' }, { status: 404 })
        }

        if (!name || !subdomain) {
            return NextResponse.json({ error: 'Name and subdomain are required' }, { status: 400 })
        }

        const updateMenu = await prisma.menu.update({
            where: {
                userId: userRec?.id,
                id: id
            },
            data: {
                name: name,
                subdomain: subdomain
            },
        })

        return NextResponse.json(updateMenu, { status: 201 })
    } catch (error) {
        console.error('Error creating tenant:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}