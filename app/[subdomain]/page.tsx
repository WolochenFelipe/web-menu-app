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
        <div className=" h-screen bg-white ">
          <div className="flex max-h-screen">
            <aside id="default-sidebar" className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0" aria-label="Sidebar">
              <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
                {subdomain}
              </div>
            </aside>
            <main className="h-screen flex-1 p-8 text-black">
              <header className="text-2xl font-bold mb-8">Catálogo</header>
              <section>
                <h2 className="text-xl font-semibold mb-4">Categorias</h2>
              </section>
              <div className="overflow-y-auto h-2/3">
                <CategoryBox tenant={subdomain} />
              </div>
              <section>
                <h2 className="text-xl font-semibold mb-4">Categorias</h2>
              </section>
              <div>
                <ProductBox tenant={subdomain} />
              </div>
            </main>
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

