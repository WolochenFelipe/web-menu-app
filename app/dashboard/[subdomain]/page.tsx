// ./app/dashboard/[subdomain]/page.tsx
import CreateCategory from "../../components/category/create-category";
import CreateProduct from "../../components/product/create-product";
//import UpdateProduct from "../../components/product/update-product";
import { Dialog } from "../../components/dialog";
import CategoryBox from "../../components/category-box";
import ProductBox from "../../components/product-box";
import CreateProductDialog from "../../components/product/create-product";

interface TenantProps {
    params: { subdomain: string };
}

export default function Page({ params }: TenantProps) {
    const { subdomain } = params;

    return (
        <div className="relative h-screen">
            <div className="flex h-full bg-white">
                <aside className="w-1/6 bg-gray-400 p-6 text-black">
                    <div className="text-xl font-bold mb-8">{subdomain}</div>
                    <nav className="space-y-4">
                        <CreateCategory tenantId={subdomain} />
                        <CreateProductDialog tenant={subdomain} />
                    </nav>
                </aside>
                <main className="w-full flex-1 p-8  text-black">
                    <header className="text-2xl font-bold mb-8 overflow-auto">Gestão do Catálogo</header>
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Categorias</h2>
                    </section>
                    <CategoryBox tenant={subdomain} />
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Produtos</h2>
                    </section>
                    <ProductBox tenant={subdomain} />
                </main>
            </div>
        </div>
    );
}






