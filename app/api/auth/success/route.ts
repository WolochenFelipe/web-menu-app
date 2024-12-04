import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET() {
    const { getUser } = getKindeServerSession()
    const kindeUser = await getUser()

    if (!kindeUser || kindeUser == null || !kindeUser.id) {
        throw new Error("Something went wrong with authentication" + kindeUser)
    }

    let dbUser = await prisma.user.findUnique({
        where: { kindeId: kindeUser.id }
    })

    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                kindeId: kindeUser.id,
                name: `${kindeUser.given_name} ${kindeUser.family_name}`,
                email: kindeUser.email ?? "",
            }
        })
    }
    console.log("Ive been here")
    return NextResponse.redirect("http://localhost:3000/dashboard")
}

//sucess