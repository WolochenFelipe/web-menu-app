// create-product.tsx (Client Component)
"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ProductsCategories from '../product-categories';
import { useState } from 'react';
import { Dialog } from '../dialog';
import { zfd } from 'zod-form-data';

const productSchema = z.object({
    name: z.string().nonempty("Nome é Obrigatório").min(3, "Mínimo de 3 Letras para o Nome"),
    description: z.string().nonempty("Descrição é Obrigatória").min(3, "Mínimo de 3 Letras para Descrição"),
    notices: z.string().nonempty("Alerta é Obrigatório"),
    categoria: z.string().nonempty("Categoria é Obrigatório"),
    nutricionalTable: z.string().nonempty("Tabela Nutricional é Obrigatória"),
    image: zfd.file(z.instanceof(FileList)).transform((fileList: FileList) => {
        return fileList[0]
    })
        .refine((file) => file && file.size <= 300_000_000, //300MB
            {
                message: "Tamanho Máximo da Imagem 300MB"
            }
        )
        .refine((file) =>
            file && file &&
            ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"]
                .includes(file.type), {
            message: "Formato não Suportado"
        }
        )
});

export type productSchema = z.infer<typeof productSchema>;

export default function CreateProductDialog({ tenant }: { tenant: string }) {

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<productSchema>({
        resolver: zodResolver(productSchema)
    });

    const [open, setOpen] = useState(false)

    async function handleSubmitProd(data: productSchema) {
        const formData = new FormData()
        for (let key in data) {
            //@ts-expect-error
            formData.append(key, data[key])
        }
        if (data.image)
            formData.set("image", data.image)
        formData.append("menu", tenant)

        const response = await fetch('/api/product/create-product', {
            method: 'POST',
            body: formData,
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
                <li>
                    <button className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                        </svg>
                        <span className="ms-3">Adicionar Produto</span>
                    </button>
                </li>
            }
        >
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Adicionar Produto</h2>
                <form onSubmit={handleSubmit(handleSubmitProd)} className="space-y-4">
                    <div>
                        <div className='flex flex-col gap-1'>
                            <label className="text-gray-300">Nome do Produto:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded text-gray-700"
                                {...register('name')}
                            />
                            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="text-gray-300">Descrição:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded text-gray-700"
                                {...register('description')}
                            />
                            {errors.description && <span className='text-red-500'>{errors.description.message}</span>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="text-gray-300">Categoria:</label>
                            <ProductsCategories tenant={tenant} register={register} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="text-gray-300">Alertas:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded text-gray-700"
                                {...register('notices')}
                            />
                            {errors.notices && <span className='text-red-500'>{errors.notices.message}</span>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className="text-gray-300">Tabela Nutricional:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded text-gray-700"
                                {...register('nutricionalTable')}
                            />
                            {errors.nutricionalTable && <span className='text-red-500'>{errors.nutricionalTable.message}</span>}
                        </div>
                        <div className='flex flex-col gap-1 mt-8'>
                            <label className=" text-gray-300">Imagem:</label>
                            <input
                                type="file"
                                className="w-full p-2 border border-gray-300 rounded text-gray-700"
                                {...register('image')}
                            />
                            {errors.image && <span className='mt-2 text-red-500'>{errors.image.message}</span>}
                        </div>
                        <span onClick={() => console.log(getValues())}>{JSON.stringify(getValues())}</span>
                    </div>

                    <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">
                        Salvar
                    </button>
                </form>
            </div>
        </Dialog>
    );
}
