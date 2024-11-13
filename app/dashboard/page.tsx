// dashboard
import CreateMenu from "../components/create-menu";
import { Dialog } from "../components/dialog";
import MenuBox from "../components/menu-box"


export default async function Page() {
    return (
        <div className="relative h-screen">
            <div className=" h-screen bg-white ">
                <div className="flex max-h-screen">
                    <aside className="w-1/6 h-screen bg-gray-400 p-6 text-black">
                        <div className="text-xl font-bold mb-8">Restaurante Bom</div>
                        <nav className="space-y-4">
                            <CreateMenuDialog />
                        </nav>
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

function CreateMenuDialog() {
    return (
        <>
            <Dialog
                trigger={
                    <button className="w-full text-center bg-white p-2 rounded">
                        Gerenciar Menus
                    </button>
                }>
                <CreateMenu />
            </Dialog>
        </>
    )
}
