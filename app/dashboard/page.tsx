// // dashboard
// import { PrismaClient } from "@prisma/client";
// import CreateMenuDialog from "../components/create-menu";
// import MenuBox from "../components/menu-box"

// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// const prisma = new PrismaClient()
// export default async function Page() {
//     const { getUser } = getKindeServerSession();
//     const session = await getUser();
//     return (
//         <div className="relative h-screen">
//             <div className=" h-screen bg-white ">
//                 <div className="flex max-h-screen">
//                     <aside id="default-sidebar" className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar">
//                         <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
//                             <ul className="space-y-2 font-medium">
//                                 <li>
//                                     <button className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
//                                         <svg className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
//                                             <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
//                                             <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
//                                         </svg>
//                                         <span className="ms-3">Dashboard</span>
//                                     </button>
//                                 </li>

//                                 <CreateMenuDialog />
//                                 {session ? (
//                                     <LogoutLink>
//                                         <li>
//                                             <a href="http://localhost:3000/" className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
//                                                 <svg className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
//                                                     <path
//                                                         stroke="currentColor"
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth={2}
//                                                         d="M1 8h11m0 0L8 4m4 4l-4 4m4-11h3a2 2 0 012 2v10a2 2 0 01-2 2h-3"
//                                                     /></svg>
//                                                 <span className="ms-3 flex-1 whitespace-nowrap">Deslogar</span>
//                                             </a>
//                                         </li>
//                                     </LogoutLink>
//                                 ) : (<div></div>)}
//                             </ul>
//                         </div>
//                     </aside>
//                     <main className="h-screen flex-1 p-8 text-black">
//                         <header className="text-2xl font-bold mb-8">Gestão do Catálogo</header>
//                         <section>
//                             <h2 className="text-xl font-semibold mb-4">Menus</h2>
//                         </section>
//                         <div className="overflow-y-auto h-2/3">
//                             <MenuBox />
//                         </div>
//                     </main>
//                 </div>
//             </div>
//         </div>
//     );
// }


// //page dashboard

import { PrismaClient } from "@prisma/client";
import CreateMenuDialog from "../components/create-menu";
import MenuBox from "../components/menu-box";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Inicializa o Prisma Client
const prisma = new PrismaClient();

export default async function Page() {
    // Obtém a sessão do usuário
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();

    if (!kindeUser || !kindeUser.id) {
        // Se o usuário não estiver autenticado, redireciona ou exibe erro
        return <div>Você precisa estar autenticado para acessar o dashboard.</div>;
    }

    // Busca os dados do usuário na base
    let userRec = await prisma.user.findUnique({
        where: { kindeId: kindeUser.id },
    });

    // Se o usuário não for encontrado, cria uma nova entrada
    if (!userRec) {
        userRec = await prisma.user.create({
            data: {
                kindeId: kindeUser.id,
                name: `${kindeUser.given_name} ${kindeUser.family_name}`,
                email: kindeUser.email ?? "",
            },
        });
    }

    // Aqui você pode verificar os menus associados a esse usuário (opcional)
    const userMenus = await prisma.menu.findMany({
        where: { userId: userRec.id },
    });

    return (
        <div className="relative h-screen">
            <div className="h-screen bg-white">
                <div className="flex max-h-screen">
                    <aside
                        id="default-sidebar"
                        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
                        aria-label="Sidebar"
                    >
                        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <button className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                        <svg
                                            className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 21"
                                        >
                                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                        </svg>
                                        <span className="ms-3">Dashboard</span>
                                    </button>
                                </li>

                                <CreateMenuDialog />
                                {kindeUser ? (
                                    <LogoutLink>
                                        <li>
                                            <a
                                                href="http://localhost:3000/"
                                                className="w-full group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                            >
                                                <svg
                                                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 18 16"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M1 8h11m0 0L8 4m4 4l-4 4m4-11h3a2 2 0 012 2v10a2 2 0 01-2 2h-3"
                                                    />
                                                </svg>
                                                <span className="ms-3 flex-1 whitespace-nowrap">Deslogar</span>
                                            </a>
                                        </li>
                                    </LogoutLink>
                                ) : (
                                    <div></div>
                                )}
                            </ul>
                        </div>
                    </aside>
                    <main className="h-screen flex-1 p-8 text-black">
                        <header className="text-2xl font-bold mb-8">Gestão do Catálogo</header>
                        <section>
                            <h2 className="text-xl font-semibold mb-4">Menus</h2>
                        </section>
                        <div className="overflow-y-auto h-2/3">
                            <MenuBox />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
