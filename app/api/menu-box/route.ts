
import { NextResponse } from 'next/server'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()
  let userRec = await prisma.user.findUnique({
    where: { kindeId: kindeUser.id }
  })

  try {
    if (!kindeUser || kindeUser == null || !kindeUser.id) {
      throw new Error("Something went wrong with authentication" + kindeUser)
    }
    const existingTenants = await prisma.menu.findMany({
      where: { userId: userRec?.id }
    })
    if (existingTenants.length > 0) {
      return NextResponse.json({ existingTenants });
    }
    return NextResponse.json({ error: 'No tenants found' }, { status: 404 });

  } catch (error) {
    console.error('Error creating tenant:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}