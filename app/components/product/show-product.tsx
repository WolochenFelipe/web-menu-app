"use client";

import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog } from "../dialog";

type Product = {
    id: string,
    name: string
    description: string
    notices: string
    nutricionalTable: string
}

type ProductProps = {
    tenantId: string;
    productId: string;
};

const productSchema = z.object({
    Name: z.string(),
    Description: z.string(),
    Notices: z.string(),
    NutricionalTable: z.string()
});

type productSchema = z.infer<typeof productSchema>;

export default function ShowProduct({ tenantId, productId }: ProductProps) {
    const [product, setProduct] = useState<Product | null>(null);
    const [isModified, setIsModified] = useState(false);

    const { register, handleSubmit, watch } = useForm<productSchema>({
        resolver: zodResolver(productSchema),
    });

    const watchFields = watch(['Name', 'Description', 'Notices', 'NutricionalTable']);

    async function handleSubmitMenu(data: productSchema) {
        const response = await fetch('/api/product/update-product', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.Name,
                description: data.Description,
                notices: data.Notices,
                nutricionalTable: data.NutricionalTable,
                menu: tenantId,
                id: productId,
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
        const fetchProduct = async () => {
            try {
                const resp = await fetch('/api/product/get-product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ menu: tenantId, id: productId }),
                });
                const data = await resp.json();
                if (data) {
                    setProduct(data);
                }
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };

        fetchProduct();
    }, [tenantId, productId]);

    useEffect(() => {
        if (product) {
            const isDifferent = watchFields[0] !== product.name || watchFields[1] !== product.description || watchFields[2] !== product.notices || watchFields[3] !== product.nutricionalTable;
            setIsModified(isDifferent);
        }
    }, [watchFields, product]);

    return (
        <div className="p-8 bg-gray-700 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl font-semibold mb-4">Produto</h2>
            {product ? (
                <form onSubmit={handleSubmit(handleSubmitMenu)} className="space-y-4" id="updateProductForm">
                    <div>
                        <label className="text-gray-300">Nome:</label>
                        <input
                            defaultValue={product.name}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('Name')}
                        />
                        <label className="text-gray-300">Descrição:</label>
                        <input
                            defaultValue={product.description}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('Description')}
                        />
                        <label className="text-gray-300">Alertas:</label>
                        <input
                            defaultValue={product.notices}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('Notices')}
                        />
                        <label className="text-gray-300">Tabela Nutricional:</label>
                        <input
                            defaultValue={product.nutricionalTable}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded text-gray-700"
                            {...register('NutricionalTable')}
                        />
                    </div>
                    <div className="grid grid-cols-2">
                        {isModified && (
                            <button type="submit" form="updateProductForm" className="font-semibold w-2/3 text-center bg-gray-500 text-white p-2 rounded hover:bg-gray-400">
                                Salvar
                            </button>
                        )}
                        <DeleteDialog productId={productId} />
                    </div>
                </form>
            ) : (
                <p>Carregando produto...</p>
            )}
        </div>
    );
}


function DeleteDialog({ productId }: { productId: string }) {

    const [open, setOpen] = useState(false)

    async function handleSubmitMenu() {
        const response = await fetch('/api/product/delete-product', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: productId
            }),
        })
        if (response.ok) {
            setOpen(false)
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
                <button type="button" className="font-semibold w-2/3 text-center bg-red-400 text-white p-2 rounded hover:bg-red-500">
                    Deletar Produto
                </button>
            }
        >
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Adicionar Produto</h2>
                <form onSubmit={handleSubmitMenu} className="space-y-4" id="deleteProductForm">
                    <div>
                        <div className="font-semibold text-red-400 text-2xl">
                            Deseja Excluir o Produto Permanentemente?
                        </div>
                        <button type="submit" form="deleteProductForm" className="font-semibold w-full bg-red-400 text-white p-2 rounded">
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}