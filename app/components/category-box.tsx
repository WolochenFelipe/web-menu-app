// ./components/category-box.tsx
"use client";
import { useState, useEffect } from 'react';
import { Dialog } from "../components/dialog";
import ShowCategory from "../components/category/show-category";

type Category = {
    id: string;
    name: string;
    icon: string;
    description: string;
};

export default function CategoryBox({ tenant }: { tenant: string }) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!tenant) {
            console.error("Tenant is undefined or empty");
            return;
        }

        const fetchCategories = async () => {
            try {
                const resp = await fetch(`/api/category/category-box/${tenant}`);
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

    return (
        <>
            <div className="relative overflow-x-auto ml-64">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Ícone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome da Categoria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descrição
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length === 0 ? (
                            <div>Não há categorias ainda</div>
                        ) : (
                            <>
                                {selectedCategory && (
                                    <Dialog
                                        open={open}
                                        setOpen={setOpen}
                                    >
                                        <ShowCategory tenantId={tenant} categoryId={selectedCategory.id} />
                                    </Dialog>
                                )}
                                {categories.map((category) => (
                                    <tr onClick={() => { setSelectedCategory(category); setOpen(true) }} key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {category.icon &&
                                                <img className="h-8 w-8 rounded-full" src={category.icon} alt="image" />
                                            }
                                        </th>
                                        <td className="px-6 py-4">
                                            {category.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {category.description}
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}


