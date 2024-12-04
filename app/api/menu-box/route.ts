
// import { NextResponse } from 'next/server'
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export async function GET() {
//   const { getUser } = getKindeServerSession()
//   const kindeUser = await getUser()
//   let userRec = await prisma.user.findUnique({
//     where: { kindeId: kindeUser.id }
//   })

//   try {
//     if (!kindeUser || kindeUser == null || !kindeUser.id) {
//       throw new Error("Something went wrong with authentication" + kindeUser)
//     }
//     const existingTenants = await prisma.menu.findMany({
//       where: { userId: userRec?.id }
//     })
//     if (existingTenants.length > 0) {
//       return NextResponse.json({ existingTenants });
//     }
//     return NextResponse.json({ error: 'No tenants found' }, { status: 404 });

//   } catch (error) {
//     console.error('Error creating tenant:', error)
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
//   }
// }

// //menu-box

import { NextResponse } from 'next/server';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Obtém as informações do usuário autenticado
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();

    // Verifica se o usuário está autenticado corretamente
    if (!kindeUser || !kindeUser.id) {
      return NextResponse.json({ error: 'Usuário não autenticado.' }, { status: 401 });
    }

    // Busca o usuário no banco de dados usando o ID do Kinde
    let userRec = await prisma.user.findUnique({
      where: { kindeId: kindeUser.id }
    });

    // Se o usuário não existir, você pode criar ele (opcional)
    if (!userRec) {
      return NextResponse.json({ error: 'usuario precisa estar autenticado' }, { status: 400 })
    }

    // Busca os menus associados ao usuário
    const existingTenants = await prisma.menu.findMany({
      where: { userId: userRec.id },
    });

    // Retorna os menus encontrados ou uma mensagem de erro
    if (existingTenants.length > 0) {
      return NextResponse.json({ existingTenants });
    } else {
      return NextResponse.json({ error: 'Nenhum menu encontrado.' }, { status: 404 });
    }
  } catch (error) {
    // Caso ocorra algum erro, retorna uma resposta de erro
    console.error('Erro ao recuperar os menus:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Desconecta o Prisma após a operação
  }
}
