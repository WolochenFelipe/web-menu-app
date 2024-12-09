// ./components/product-box.tsx
"use client";
import { useState, useEffect } from 'react';
import { Dialog } from "../components/dialog";
import ShowProduct from "./product/show-product";

type Product = {
    id: string;
    name: string;
    description: string;
    category: string;
    notices: string;
    nutricionalTable: string;
    image: string;
    price: string
};

export default function ProductBox({ tenant }: { tenant: string }) {
    const [categories, setCategories] = useState<Product[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<Product | null>(null);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!tenant) {
            console.error("Tenant is undefined or empty");
            return;
        }

        const fetchCategories = async () => {
            try {
                const resp = await fetch(`/api/product/product-box/${tenant}`);
                const data = await resp.json();

                if (data.categories) {
                    setCategories(data.categories);
                } else {
                    console.error('No categories found or error occurred:', data.error);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                setCategories([]);
            }
        };

        fetchCategories();
    }, [tenant]);
    // return (
    //     <>
    //         <div className="relative overflow-x-auto ml-64">
    //             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    //                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //                     <tr>
    //                         <th scope="col" className="px-6 py-3">
    //                             Imagem
    //                         </th>
    //                         <th scope="col" className="px-6 py-3">
    //                             Nome do Produto
    //                         </th>
    //                         <th scope="col" className="px-6 py-3">
    //                             Descrição
    //                         </th>
    //                         <th scope='col' className='px-6 py-3'>
    //                             Preço
    //                         </th>
    //                         <th scope="col" className="px-6 py-3">
    //                             Categoria
    //                         </th>
    //                         <th scope="col" className="px-6 py-3">
    //                             Alertas
    //                         </th>
    //                         <th scope="col" className="px-6 py-3">
    //                             Tabela Nutricional
    //                         </th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {categories.length === 0 ? (
    //                         <tr><th>Não há produtos ainda</th></tr>
    //                     ) : (
    //                         <>
    //                             {selectedProductId && (
    //                                 <Dialog
    //                                     open={open}
    //                                     setOpen={setOpen}
    //                                 >
    //                                     <ShowProduct tenantId={tenant} productId={selectedProductId.id} />
    //                                 </Dialog>
    //                             )}
    //                             {categories.map((product) => (
    //                                 <tr onClick={() => { setSelectedProductId(product); setOpen(true) }}
    //                                     key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

    //                                     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                                         {product.image &&
    //                                             // eslint-disable-next-line @next/next/no-img-element
    //                                             <img className="h-8 w-8 rounded-full" src={product.image} alt="image" />
    //                                         }
    //                                     </th>
    //                                     <td className="px-6 py-4">
    //                                         {product.name}
    //                                     </td>
    //                                     <td className="px-6 py-4">
    //                                         {product.description}
    //                                     </td>
    //                                     <td className="px-6 py-4">
    //                                         {product.price}
    //                                     </td>
    //                                     <td className="px-6 py-4">
    //                                         {product.category}
    //                                     </td>
    //                                     <td className="px-6 py-4">
    //                                         {product.notices}
    //                                     </td>
    //                                     <td className="px-6 py-4">
    //                                         {product.nutricionalTable}
    //                                     </td>
    //                                 </tr>
    //                             ))}
    //                         </>
    //                     )}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </>
    // );

    return (
        <>
            <div className="relative overflow-x-auto ml-64">
                <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="grid grid-cols-7 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <div className="px-6 py-3">
                            Imagem
                        </div>
                        <div className="px-6 py-3">
                            Nome do Produto
                        </div>
                        <div className="px-6 py-3">
                            Descrição
                        </div>
                        <div className='px-6 py-3'>
                            Preço
                        </div>
                        <div className="px-6 py-3">
                            Categoria
                        </div>
                        <div className="px-6 py-3">
                            Alertas
                        </div>
                        <div className="px-6 py-3">
                            Tabela Nutricional
                        </div>
                    </div>
                    <div className='max-h-80 overflow-y-scroll'>
                        {categories.length === 0 ? (
                            <div className="grid grid-cols-3">
                                <div className="px-6 py-4">Não há Produtos ainda</div>
                            </div>
                        ) : (
                            <>
                                {selectedProductId && (
                                    <Dialog
                                        open={open}
                                        setOpen={setOpen}
                                    >
                                        <ShowProduct tenantId={tenant} productId={selectedProductId.id} />
                                    </Dialog>
                                )}
                                {categories.map((product) => (
                                    <div onClick={() => { setSelectedProductId(product); setOpen(true) }}
                                        key={product.id} className="grid grid-cols-7 bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer">

                                        <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {product.image &&
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img className="h-8 w-8 rounded-full" src={product.image} alt="image" />
                                            }
                                        </div>
                                        <div className="px-6 py-4">
                                            {product.name}
                                        </div>
                                        <div className="px-6 py-4">
                                            {product.description}
                                        </div>
                                        <div className="px-6 py-4">
                                            {product.price}
                                        </div>
                                        <div className="px-6 py-4">
                                            {product.category}
                                        </div>
                                        <div className="px-6 py-4">
                                            {product.notices}
                                        </div>
                                        <div className="px-6 py-4">
                                            {product.nutricionalTable}
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}


