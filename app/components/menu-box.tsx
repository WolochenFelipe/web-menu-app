// MenuBox.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Tenant = {
    nome: string;
    subdomain: string;
    image: string
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
        <div className="grid grid-cols-1 gap-4 ml-64">
            {tenants.length === 0 ? (
                <div>No menus available</div>
            ) : (
                tenants.map((tenant) => (
                    <div
                        key={tenant.subdomain}
                        onClick={() => handleRedirect(tenant)}
                        className="bg-gray-300 p-4 rounded-lg shadow-md text-center cursor-pointer"
                    >
                        <div className="h-16 w-16 mx-auto bg-white rounded-full mb-4">
                            {tenant.image &&
                                // eslint-disable-next-line @next/next/no-img-element
                                <img className="h-16 w-16 rounded-full object-fill" src={tenant.image} alt="image" />
                            }
                        </div>
                        <div className="font-medium">{tenant.nome}</div>
                        <div className="text-gray-600">{tenant.subdomain}</div>
                        <div className='flex w-full justify-end'>
                            <button onClick={() => deleteTenant(tenant.subdomain)}>
                                <svg className="w-12 h-12 text-gray-800 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                                </svg>

                            </button>
                            <button onClick={() => updateTenant(tenant.subdomain)}>
                                <svg className="w-12 h-12 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );

    async function deleteTenant(tenantSubdomain: string) {
        try {
            const response = await fetch('/api/delete-tenant', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: tenantSubdomain }),
            });

            if (response.ok) {
                console.log("Tenant deleted successfully");
            } else {
                console.error("Failed to delete tenant");
            }
        } catch (error) {
            console.error("Error deleting tenant:", error);
        }
    }
    async function updateTenant(tenantSubdomain: string) {
        try {

        } catch (error) {
            console.error("Error updating tenant: ", error)
        }
    }

}
