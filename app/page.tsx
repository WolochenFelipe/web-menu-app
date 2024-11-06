import Image from "next/image";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default async function Home() 
{
  const {getUser} = getKindeServerSession();
  const session = await getUser();


  

  // const categories = await prisma.category.findMany({
  //   where:{
  //     menuId: 1,
  //   },
  // })
  // const products = await prisma.products.findMany({
  //   where:{
  //     categoryId: 1,
  //   },
  // })

  return (
    <div>
      <div className="grid grid-cols-2 w-screen bg-orange-400 min-h-16 ">
        <div className="flex items-center m-4">
          <h1>Nome qualquer</h1>
        </div>
          {session ? (
              <LogoutLink>
                <button>LogOut</button>
              </LogoutLink>
            ):(
            <div className="flex items-center justify-end space-x-4 m-4">
              <RegisterLink>
                <button className="ring-2 ring-blue-700 p-2 rounded-md text-blue">Register</button>
              </RegisterLink>
              <LoginLink>
                <button className="ring-2 ring-blue-700 p-2 rounded-md text-blue">Login</button>
              </LoginLink>
            </div>
            )}
      </div>
      <div>
        {/* {categories.map((category) => (<h2 key={category.id}>{category.description}</h2>))}
        {products.map((prod) => (<h2 key={prod.id}>{prod.description}</h2>))} */}
      </div>
      
    </div>
  );
}
