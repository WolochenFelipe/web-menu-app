// // ./app/dashboard/[subdomain]/page.tsx
// import CreateCategory from "../../components/category/create-category";
// import CategoryBox from "../../components/category-box";
// import ProductBox from "../../components/product-box";
// import CreateProduct from "../../components/product/create-product";

// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { PrismaClient } from "@prisma/client";
// import Link from "next/link";

// const prisma = new PrismaClient()

// interface TenantProps {
//     params: { subdomain: string };
// }

// export default async function Page({ params }: TenantProps) {
//     const { subdomain } = params;

//     const { getUser } = getKindeServerSession();
//     const session = await getUser();
//     return (
//         <div className="relative h-screen">
//             <div className="flex h-full ">
//                 <aside id="default-sidebar" className="ring-2 ring-gray-500 fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar">
//                     <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
//                         <div className="text-4xl font-bold mb-8">{subdomain}</div>
//                         <ul className="space-y-2 font-medium">
//                             <li>
//                                 <Link href={"http://localhost:3000/dashboard/"} className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
//                                     <svg className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
//                                         <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
//                                         <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
//                                     </svg>
//                                     <span className="ms-3">Dashboard</span>
//                                 </Link>
//                             </li>
//                             <CreateCategory tenantId={subdomain} />

//                             <CreateProduct tenant={subdomain} />
//                             <li>
//                                 <button className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
//                                     <svg className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
//                                         <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
//                                     </svg>
//                                     <span className="ms-3 ">Categorias</span>
//                                 </button>
//                             </li>
//                             <li>
//                                 <button className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
//                                     <svg className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
//                                         <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
//                                     </svg>
//                                     <span className="ms-3 ">Produtos</span>
//                                 </button>
//                             </li>
//                             <li>
//                                 {session ? (
//                                     <LogoutLink href={"http://localhost:3000/"} className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
//                                         <svg className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
//                                             <path
//                                                 stroke="currentColor"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M1 8h11m0 0L8 4m4 4l-4 4m4-11h3a2 2 0 012 2v10a2 2 0 01-2 2h-3"
//                                             /></svg>
//                                         <span className="ms-3 flex-1 whitespace-nowrap">Deslogar</span>

//                                     </LogoutLink>
//                                 ) : (<div></div>)}
//                             </li>
//                         </ul>
//                     </div>
//                 </aside>

//                 <main className="w-full flex-1 p-8  bg-gray-50 px-3 py-4 dark:bg-gray-800">
//                     <header className="text-2xl text-white font-bold mb-8 overflow-auto">Gestão do Catálogo</header>
//                     <section>
//                         <h2 className="text-xl text-white font-semibold mb-4 ml-64">Categorias</h2>
//                     </section>
//                     <CategoryBox tenant={subdomain} />
//                     <section>
//                         <h2 className="text-xl font-semibold mt-4 mb-4 ml-64">Produtos</h2>
//                     </section>
//                     <ProductBox tenant={subdomain} />
//                 </main>
//             </div>
//         </div>
//     );
// }


import CreateCategory from "../../components/category/create-category";
import CategoryBox from "../../components/category-box";
import ProductBox from "../../components/product-box";
import CreateProduct from "../../components/product/create-product";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

interface TenantProps {
    params: { subdomain: string };
    searchParams: { section?: string };
}

export default async function Page({ params, searchParams }: TenantProps) {
    const { subdomain } = params;
    const { section = "category" } = searchParams; // Padrão é "category"
    const { getUser } = getKindeServerSession();
    const session = await getUser();

    return (
        <div className="relative h-screen">
            <div className="flex h-full">
                <aside
                    id="default-sidebar"
                    className="ring-2 ring-gray-500 fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
                    aria-label="Sidebar"
                >
                    <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
                        <div className="text-4xl font-bold mb-8">{subdomain}</div>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link
                                    href={"http://localhost:3000/dashboard/"}
                                    className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <svg className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ms-3">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`?section=category`}
                                    className={`w-full group flex items-center rounded-lg p-2 ${section === "category"
                                        ? "bg-gray-200 dark:bg-gray-600"
                                        : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="ms-3">Categorias</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`?section=product`}
                                    className={`w-full group flex items-center rounded-lg p-2 ${section === "product"
                                        ? "bg-gray-200 dark:bg-gray-600"
                                        : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                    </svg>
                                    <span className="ms-3">Produtos</span>
                                </Link>
                            </li>
                            <li>
                                {section === "category" ? (
                                    <>
                                        <CreateCategory tenantId={subdomain} />
                                    </>
                                ) : (
                                    <>
                                        <CreateProduct tenant={subdomain} />
                                    </>
                                )}


                            </li>
                            <li>
                                {session ? (
                                    <LogoutLink
                                        href={"http://localhost:3000/"}
                                        className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        <svg className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M1 8h11m0 0L8 4m4 4l-4 4m4-11h3a2 2 0 012 2v10a2 2 0 01-2 2h-3"
                                            /></svg>
                                        <span className="ms-3 flex-1 whitespace-nowrap">
                                            Deslogar
                                        </span>
                                    </LogoutLink>
                                ) : (
                                    <div></div>
                                )}
                            </li>
                        </ul>
                    </div>
                </aside>

                <main className="w-full flex-1 p-8 bg-gray-50 px-3 py-4 dark:bg-gray-800">
                    <header className="text-2xl text-white font-bold mb-8 overflow-auto">
                        Gestão do Catálogo
                    </header>
                    {section === "category" ? (
                        <>
                            <section>
                                <h2 className="text-xl text-white font-semibold mb-4 ml-64">
                                    Categorias
                                </h2>
                                <CategoryBox tenant={subdomain} />
                            </section>
                        </>
                    ) : (
                        <>
                            <section>
                                <h2 className="text-xl font-semibold mt-4 mb-4 ml-64">
                                    Produtos
                                </h2>
                                <ProductBox tenant={subdomain} />
                            </section>
                        </>
                    )}
                </main>
            </div>
        </div >
    );
}

