// MenuBox.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Tenant = {
    nome: string;
    subdomain: string;
};

export default function MenuBox() {
    const [tenants, setTenants] = useState<Tenant[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchTenants = async () => {
            try {
                const resp = await fetch('/api/menu-box/');
                const data = await resp.json();
                if (data.existingTenants) {
                    setTenants(data.existingTenants);
                }
            } catch (error) {
                console.error('Error fetching tenants:', error);
                setTenants([]);
            }
        };

        fetchTenants();
    }, []);

    const handleRedirect = (tenant: Tenant) => {
        router.push(`/dashboard/${tenant.subdomain}`);
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            {tenants.length === 0 ? (
                <p>No menus available</p>
            ) : (
                tenants.map((tenant) => (
                    <div
                        key={tenant.subdomain}
                        onClick={() => handleRedirect(tenant)}
                        className="bg-gray-300 p-4 rounded-lg shadow-md text-center cursor-pointer"
                    >
                        <div className="h-16 w-16 mx-auto bg-white rounded-full mb-4"></div>
                        <p className="font-medium">{tenant.nome}</p>
                        <p className="text-gray-600">{tenant.subdomain}</p>
                    </div>
                ))
            )}
        </div>
    );
}
