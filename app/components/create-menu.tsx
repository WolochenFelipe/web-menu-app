// create-menu.tsx (Client Component)
"use client";

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const menuSchema = z.object({
    Name: z.string(),
    Subdomain: z.string(),
    user: z.string().optional()
})

type menuSchema = z.infer<typeof menuSchema>

export default function CreateMenu() {
    const { register, handleSubmit } = useForm<menuSchema>({
        resolver: zodResolver(menuSchema)
    })


    async function handleSubmitMenu(data: menuSchema) {
        const response = await fetch('/api/create-tenant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.Name,
                subdomain: data.Subdomain
            }),
        });

        if (response.ok) {
            console.log('Menu criado com sucesso');
        } else {
            console.error('Erro ao criar menu');
        }
    }

    return (
        <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Criar Menu</h2>
            <form onSubmit={handleSubmit(handleSubmitMenu)} className="space-y-4">
                <div>
                    <label className=" text-gray-300">Nome do Estabelecimento:</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-gray-700"
                        {...register('Name')}
                        required
                    />
                    <label className=" text-gray-300">Subdominio:</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-gray-700"
                        {...register('Subdomain')}
                        required
                    />


                </div>
                <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">
                    Salvar
                </button>
            </form>
        </div>
    );
}
