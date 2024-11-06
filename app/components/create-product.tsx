// create-menu.tsx (Client Component)
"use client";

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const productSchema = z.object({
    Name: z.string(),
    Description: z.string(),
    Notices: z.string(),
    Categoria: z.string(),
    NutricionalTable: z.string(),
})

type productSchema = z.infer<typeof productSchema>

export default function CreateProduct() {
    const { register, handleSubmit } = useForm<productSchema>({
        resolver: zodResolver(productSchema)
    })


    async function handleSubmitMenu(data: productSchema) {
        const response = await fetch('/api/create-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.Name,
                Description: data.Description,
                Notices: data.Notices,
                NutricionalTable: data.NutricionalTable,
            }),
        });

    }

    return (
        <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Adicionar Produto</h2>
            <form onSubmit={handleSubmit(handleSubmitMenu)} className="space-y-4">
                <div>
                    <label className=" text-gray-300">Nome do Produto:</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-gray-700"
                        {...register('Name')}
                        required
                    />
                    <label className=" text-gray-300">Descrição:</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-gray-700"
                        {...register('Description')}
                        required
                    />
                    <label className=" text-gray-300">Categoria:</label>
                    <select {...register('Categoria')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {/* <renderCategories /> */}
                    </select>
                    <label className=" text-gray-300">Alertas:</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-gray-700"
                        {...register('Notices')}
                        required
                    />
                    <label className=" text-gray-300">Tabela Nutricional:</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-gray-700"
                        {...register('NutricionalTable')}
                        required
                    />

                </div>
                <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">
                    Salvar
                </button>
            </form>
        </div>
    )
}

async function renderCategories() {
    return (
        <>

        </>
    )
}
