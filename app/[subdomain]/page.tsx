import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import { Dialog } from '../components/dialog'
import CreateCategory from '../components/create-category'
import CreateProduct from '../components/create-product'

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
      <div className="relative">
        <div className="flex h-screen bg-gray-500">
          <aside className="w-1/4 bg-gray-700 p-6 text-white">
            <div className="text-xl font-bold mb-8">{tenant.name}</div>
            <nav className="space-y-4">
              <CreateCategoryDialog tenantId={tenant.subdomain} />
              <CreateProductDialog />
            </nav>
          </aside>
          <main className="flex-1 p-8">
            <header className="text-2xl font-bold mb-8">Gestão de Catálogo</header>
            <section>
              <h2 className="text-xl font-semibold mb-4">Categorias</h2>
              <CategorySamples tenantId={tenant.subdomain} />
            </section>
          </main>
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

function CreateCategoryDialog({ tenantId }: { tenantId: string }) {
  return (
    <Dialog
      trigger={
        <button className="w-full text-left bg-gray-400 p-2 rounded">
          Adicionar Categoria
        </button>
      }
    >
      <CreateCategory tenantId={tenantId} />
    </Dialog>
  )
}

function CreateProductDialog() {
  return (
    <>
      <Dialog
        trigger={
          <button className="w-full text-left bg-gray-400 p-2 rounded">
            Adicionar Produto
          </button>
        }>
        <CreateProduct />
      </Dialog>
    </>
  )
}

async function CategorySamples({ tenantId }: { tenantId: string }) {
  const menufind = await prisma.menu.findUnique({
    where: { subdomain: tenantId },
  })
  const categories = await prisma.category.findMany({
    where: { menuId: menufind?.id },
  })

  return (
    <div>
      {categories.length > 0 ? (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma categoria encontrada.</p>
      )}
    </div>
  )
}