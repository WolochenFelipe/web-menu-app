// ./app/api/product-box/[tenant]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { tenant: string } }) {
    const { tenant } = params;

    if (!tenant) {
        return NextResponse.json({ error: 'Tenant ID is required' }, { status: 400 });
    }

    try {
        const menu = await prisma.menu.findUnique({
            where: { subdomain: tenant },
        });

        if (!menu) {
            return NextResponse.json({ error: 'Menu not found for the given tenant' }, { status: 404 });
        }

        const categories = await prisma.product.findMany({
            where: { menuId: menu.id },
        });

        if (categories.length > 0) {
            return NextResponse.json({ categories });
        }

        console.log(`No products found for tenant ${tenant}`);
        return NextResponse.json({ error: 'No products found' }, { status: 404 });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

