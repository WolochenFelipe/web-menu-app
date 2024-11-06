
import CreateMenu from "../components/create-menu";
import { Dialog } from "../components/dialog";


export default async function Page() {
    return (
        <div className="relative">
            <div className="flex h-screen bg-gray-500">
                <aside className="w-1/4 bg-gray-700 p-6 text-white">
                    <div className="text-xl font-bold mb-8">Restaurante Bom</div>
                    <nav className="space-y-4">
                        <CreateMenuDialog />
                        <button className="w-full text-left bg-gray-400 p-2 rounded">
                            Remover Estabelecimento
                        </button>
                    </nav>
                </aside>
                <main className="flex-1 p-8">
                    <header className="text-2xl font-bold mb-8">Gestão de Estabelecimentos</header>
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Estabelecimentos</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className="h-16 w-16 mx-auto bg-gray-200 rounded-full mb-4"></div>
                                <p className="font-medium">Nome Estabelecimento</p>
                                <p className="text-gray-600">Estab</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

function CreateMenuDialog() {
    return (
        <>
            <Dialog
                trigger={
                    <button className="w-full text-left bg-gray-400 p-2 rounded">
                        Adicionar Estabelecimento
                    </button>
                }>
                <CreateMenu />
            </Dialog>
        </>
    )
}