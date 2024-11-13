// ./components/category-box.tsx
"use client";
import { useState, useEffect } from 'react';
import { Dialog } from "../components/dialog";
import ShowCategory from "../components/category/show-category";

type Category = {
    id: string;
    name: string;
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
        <div className="grid grid-cols-4 gap-4">
            {categories.length === 0 ? (
                <p>No categories available</p>
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
                        <div
                            onClick={() => { setSelectedCategory(category); setOpen(true) }}
                            className="bg-gray-300 p-4 rounded-lg shadow-md text-center cursor-pointer"
                            key={category.id}
                        >
                            <div className="h-16 w-16 mx-auto bg-white rounded-full mb-4"></div>
                            <p className="font-medium">{category.description}</p>
                            <p className="text-gray-600">{category.name}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}


