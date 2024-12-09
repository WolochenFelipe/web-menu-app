import Image from "next/image";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <>
      <nav className="border-gray-200 bg-white dark:bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          {/* <img src="../public/logowebmenu.png" className="h-8" alt="Logo" /> */}
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            {session ? (
              <LogoutLink>
                <button className="rounded-lg bg-gray-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">LogOut</button>
              </LogoutLink>
            ) : (
              <div className="flex items-center justify-end space-x-4 m-4">
                <RegisterLink>
                  <button className="rounded-lg bg-gray-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Register</button>
                </RegisterLink>
                <LoginLink>
                  <button className="rounded-lg bg-gray-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Login</button>
                </LoginLink>
              </div>
            )}
          </div>
          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-cta">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-800">
              <li>
                <a href="#" className="block rounded bg-gray-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-gray-700 md:dark:text-gray-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-gray-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-gray-500">Sobre</a>
              </li>
              <li>
                <a href="#" className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-gray-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-gray-500">Preços</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
