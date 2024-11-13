"use client";

import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog } from "../dialog";

type Category = {
    name: string;
    description: string;
    id: string;
};

type CategoryProps = {
    tenantId: string;
    categoryId: string;
};

const categorySchema = z.object({
    Name: z.string(),
    Description: z.string(),
});

type categorySchema = z.infer<typeof categorySchema>;

export default function ShowCategory({ tenantId, categoryId }: CategoryProps) {
    const [categorie, setCategorie] = useState<Category | null>(null);
    const [isModified, setIsModified] = useState(false);

    const { register, handleSubmit, watch } = useForm<categorySchema>({
        resolver: zodResolver(categorySchema),
    });

    const watchFields = watch(['Name', 'Description']);

    async function handleSubmitMenu(data: categorySchema) {
        const response = await fetch('/api/category/update-category', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.Name,
                description: data.Description,
                menu: tenantId,
                id: categoryId,
            }),
        });

        if (response.ok) {
            console.log('Categoria alterada com sucesso');
            setIsModified(false);
        } else {
            console.error('Erro ao criar Categoria');
        }
    }

    useEffect(() => {
        const fetchCategorie = async () => {
            try {
                const resp = await fetch('/api/category/get-category', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ menu: tenantId, id: categoryId }),
                });
                const data = await resp.json();
                if (data) {
                    setCategorie(data);
                }
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };

        fetchCategorie();
    }, [tenantId, categoryId]);

    useEffect(() => {
        if (categorie) {
            const isDifferent = watchFields[0] !== categorie.name || watchFields[1] !== categorie.description;
            setIsModified(isDifferent);
        }
    }, [watchFields, categorie]);

    return (
        <div className="p-8 bg-gray-700 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl font-semibold mb-4">Categoria</h2>
            {categorie ? (
                <form onSubmit={handleSubmit(handleSubmitMenu)} className="space-y-4">
                    <div>
                        <label className="text-gray-300">Nome:</label>
                        <input
                            defaultValue={categorie.name}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('Name')}
                        />
                        <label className="text-gray-300">Descrição:</label>
                        <input
                            defaultValue={categorie.description}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('Description')}
                        />
                    </div>
                    {isModified && (
                        <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">
                            Salvar
                        </button>
                    )}
                    <DeleteDialog categoryId={categoryId} />
                </form>
            ) : (
                <p>Carregando categoria...</p>
            )}
        </div>
    );
}


function DeleteDialog({ categoryId }: { categoryId: string }) {
    const [open, setOpen] = useState(false)

    async function handleSubmitMenu() {
        const response = await fetch('/api/category/delete-category', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: categoryId
            }),
        })
        if (response.ok) {
            setOpen(false)
            console.log("Categoria criado com sucesso");
        } else {
            console.log("Erro ao criar Categoria");
        }
    }

    return (
        <Dialog
            open={open}
            setOpen={setOpen}
            trigger={
                <button type="button" className="font-semibold w-2/3 text-center bg-red-400 text-white p-2 rounded hover:bg-red-500">
                    Deletar Categoria
                </button>
            }
        >
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Adicionar Categoria</h2>
                <form onSubmit={handleSubmitMenu} className="space-y-4" id="deleteCategoryForm">
                    <div>
                        <div className="font-semibold text-red-400 text-2xl">
                            Deseja Excluir o Categoria Permanentemente?
                        </div>
                        <button type="submit" form="deleteCategoryForm" className="font-semibold w-full bg-red-400 text-white p-2 rounded">
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}