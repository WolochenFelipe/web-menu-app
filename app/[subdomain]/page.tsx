import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import CategoryBox from '../components/category-box'
import ProductBox from '../components/product-box'

export default async function SubdomainPage({ params }: { params: { subdomain: string } }) {
  const { subdomain } = params
  console.log('SubdomainPage: Rendering page for subdomain:', subdomain)

  try {
    const tenant = await prisma.menu.findUnique({
      where: { subdomain },
    })
    console.log('SubdomainPage: Tenant retrieved:', tenant)

    if (!tenant) {
      console.log('SubdomainPage: Tenant not found, redirecting to 404')
      notFound()
    }


    return (
      <div className="relative h-screen">
        <div className="grid grid-cols-2 h-full bg-white">
          <div className="flex">
            <aside className="w-1/6 bg-gray-400 p-6 text-black">
              <div className="text-xl font-bold mb-8">{subdomain}</div>
            </aside>
            <main className="w-full flex-1 p-8  text-black">
              <header className="text-2xl font-bold mb-8 overflow-auto">Exibição do Catálogo</header>
              <section>
                <h2 className="text-xl font-semibold mb-4">Categorias</h2>
              </section>
              <CategoryBox tenant={subdomain} />
              <section>
                <h2 className="text-xl font-semibold mb-4">Produtos</h2>
              </section>
              <ProductBox tenant={subdomain} />

            </main></div>
          <div className="justify-items-end ">
            <div className="grid bg-gray-400 h-full w-2/3 mr-0">
              <div className="text-gray-900 font-medium text-center">
                0 items no carrinho
              </div>
              <div className="flex self-center justify-center">
                <button className="font-semibold bg-gray-700 w-1/3 p-4 text-white p-2 rounded">
                  Fechar Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('SubdomainPage: Error fetching tenant:', error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold text-red-500">Error</h1>
        <p>There was an error loading the tenant information.</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }
}