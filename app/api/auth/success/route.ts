// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
// import { PrismaClient } from "@prisma/client"
// import { NextResponse } from "next/server"

// const prisma = new PrismaClient()

// export async function GET() {
//     const { getUser } = getKindeServerSession()
//     const kindeUser = await getUser()

//     if (!kindeUser || kindeUser == null || !kindeUser.id) {
//         throw new Error("Something went wrong with authentication" + kindeUser)
//     }

//     let dbUser = await prisma.user.findUnique({
//         where: { kindeId: kindeUser.id }
//     })

//     if (!dbUser) {
//         dbUser = await prisma.user.create({
//             data: {
//                 kindeId: kindeUser.id,
//                 name: `${kindeUser.given_name} ${kindeUser.family_name}`,
//                 email: kindeUser.email ?? "",
//             }
//         })
//     }
//     console.log("Ive been here")
//     return NextResponse.redirect("http://localhost:3000/dashboard")
// }

// //sucess

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Instanciando o Prisma Client
const prisma = new PrismaClient();

export async function GET() {
    try {
        // Obtém o usuário autenticado através da sessão Kinde
        const { getUser } = getKindeServerSession();
        const kindeUser = await getUser();

        // Verifica se o usuário não está autenticado
        if (!kindeUser || !kindeUser.id) {
            return NextResponse.json(
                { error: "Erro na autenticação do usuário." },
                { status: 401 }
            );
        }

        // Busca o usuário no banco de dados usando o ID Kinde
        let dbUser = await prisma.user.findUnique({
            where: { kindeId: kindeUser.id },
        });

        // Se o usuário não existir, cria o registro no banco
        if (!dbUser) {
            dbUser = await prisma.user.create({
                data: {
                    kindeId: kindeUser.id,
                    name: `${kindeUser.given_name} ${kindeUser.family_name}`,
                    email: kindeUser.email ?? "",
                },
            });
        }

        // Aqui o usuário foi autenticado e possivelmente criado
        console.log("Usuário autenticado ou criado com sucesso.");

        // Redireciona para o dashboard do sistema
        return NextResponse.redirect("http://localhost:3000/dashboard");
    } catch (error) {
        console.error("Erro ao processar o sucesso do login:", error);
        // Caso haja um erro no processamento, retorna um erro genérico
        return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
    } finally {
        await prisma.$disconnect(); // Desconecta o Prisma ao final da execução
    }
}
