// ./components/product-box.tsx
"use client";
import { useState, useEffect } from 'react';
import { Dialog } from "../components/dialog";
import ShowProduct from "./product/show-product";

type Product = {
    id: string;
    name: string;
    description: string;
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

    return (
        <div className="grid grid-cols-4 gap-4">
            {categories.length === 0 ? (
                <p>No categories available</p>
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
                        <div
                            onClick={() => { setSelectedProductId(product); setOpen(true) }}
                            className="bg-gray-300 p-4 rounded-lg shadow-md text-center cursor-pointer"
                            key={product.id}
                        >
                            <div className="h-16 w-16 mx-auto bg-white rounded-full mb-4"></div>
                            <p className="font-medium">{product.description}</p>
                            <p className="text-gray-600">{product.name}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}


