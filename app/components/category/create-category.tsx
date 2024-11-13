// create-menu.tsx (Client Component)
"use client";

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react';
import { Dialog } from '../dialog';

const categorySchema = z.object({
    Name: z.string(),
    Description: z.string()
})

type categorySchema = z.infer<typeof categorySchema>

export default function CreateCategory({ tenantId }: { tenantId: string }) {
    const { register, handleSubmit } = useForm<categorySchema>({
        resolver: zodResolver(categorySchema),
    })

    const [open, setOpen] = useState(false)

    async function handleSubmitMenu(data: categorySchema) {
        const response = await fetch('/api/category/create-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.Name,
                description: data.Description,
                menu: tenantId,
            }),
        })

        if (response.ok) {
            setOpen(false)
            console.log('Categoria criado com sucesso');
        } else {
            console.error('Erro ao criar Categoria');
        }
    }

    return (
        <Dialog
            open={open}
            setOpen={setOpen}
            trigger={
                <button className="w-full text-center bg-white p-2 rounded">
                    Adicionar Categoria
                </button>
            }
        >
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-semibold mb-4">Adicionar Categoria</h2>
                <form onSubmit={handleSubmit(handleSubmitMenu)} className="space-y-4">
                    <div>
                        <label className=" text-gray-300">Nome:</label>
                        <input
                            type="text"
                            className="w-full p-2 mb-8 border border-gray-300 rounded text-gray-700"
                            {...register('Name')}
                            required
                        />
                        <label className=" text-gray-300">Descrição:</label>
                        <input
                            type="text"
                            className="w-full p-2 mb-8 border border-gray-300 rounded text-gray-700"
                            {...register('Description')}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">
                        Salvar
                    </button>
                </form>
            </div>
        </Dialog>
    );
}
