import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: 'Product is required' }, { status: 400 });
        }


        const deleteProduct = await prisma.product.delete({
            where: {
                id: id,
            },
        });

        return NextResponse.json(deleteProduct, { status: 201 });
    } catch (error) {
        console.error('Error deleting Product:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
