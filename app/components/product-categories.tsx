// ./components/ProductCategories.tsx
"use client";
import { useState, useEffect } from 'react';

type Category = {
    id: string;
    name: string;
    description: string;
};

type ProductCategoriesProps = {
    tenant: string;
    register: any;
};

export default function ProductCategories({ tenant, register }: ProductCategoriesProps) {
    const [categories, setCategories] = useState<Category[]>([]);

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
        <div>
            <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("categoria", { required: "Categoria é obrigatória" })}
            >
                <option value="">Selecione uma categoria</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
