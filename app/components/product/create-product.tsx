// create-product.tsx (Client Component)
"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ProductsCategories from '../product-categories';
import { useState } from 'react';
import { Dialog } from '../dialog';

const productSchema = z.object({
    Name: z.string().min(1, "Nome é obrigatório"),
    Description: z.string().min(1, "Descrição é obrigatória"),
    Notices: z.string(),
    Categoria: z.string().min(1, "Categoria é obrigatória"),
    NutricionalTable: z.string(),
});

type productSchema = z.infer<typeof productSchema>;

export default function CreateProductDialog({ tenant }: { tenant: string }) {

    const { register, handleSubmit, formState: { errors } } = useForm<productSchema>({
        resolver: zodResolver(productSchema)
    });

    const [open, setOpen] = useState(false)

    async function handleSubmitMenu(data: productSchema) {
        const response = await fetch('/api/product/create-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.Name,
                description: data.Description,
                notices: data.Notices,
                nutricionalTable: data.NutricionalTable,
                menu: tenant,
                category: data.Categoria
            }),
        });
        if (response.ok) {
            setOpen(false)
            console.log(open)
            console.log("Produto criado com sucesso");
        } else {
            console.log("Erro ao criar produto");
        }

    }

    return (
        <Dialog
            open={open}
            setOpen={setOpen}
            trigger={
                <button className="w-full text-center bg-white p-2 rounded">
                    Adicionar Produto
                </button>
            }
        >
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Adicionar Produto</h2>
                <form onSubmit={handleSubmit(handleSubmitMenu)} className="space-y-4">
                    <div>
                        <label className="text-gray-300">Nome do Produto:</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('Name')}
                            required
                        />
                        <p>{errors.Name?.message}</p>

                        <label className="text-gray-300">Descrição:</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('Description')}
                            required
                        />
                        <p>{errors.Description?.message}</p>

                        <label className="text-gray-300">Categoria:</label>
                        <ProductsCategories tenant={tenant} register={register} />
                        <p>{errors.Categoria?.message}</p>

                        <label className="text-gray-300">Alertas:</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('Notices')}
                        />

                        <label className="text-gray-300">Tabela Nutricional:</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('NutricionalTable')}
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
