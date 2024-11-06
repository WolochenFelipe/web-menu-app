import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.menu.createMany({
    data: [
      {userId: 'kp_73b42b3a53f9434c894305ff2b5aac59', name: 'Tenant 1', subdomain: 'tenant1'},
      {userId: 'kp_73b42b3a53f9434c894305ff2b5aac59', name: 'Tenant 2', subdomain: 'tenant2' }
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })