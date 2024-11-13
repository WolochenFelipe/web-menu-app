import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: 'Category is required' }, { status: 400 });
        }


        const deleteCategory = await prisma.category.delete({
            where: {
                id: id,
            },
        });

        return NextResponse.json(deleteCategory, { status: 201 });
    } catch (error) {
        console.error('Error deleting Category:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
