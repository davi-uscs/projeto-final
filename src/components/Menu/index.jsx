"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-purple-700 text-white flex gap-5 sticky top-0">
      <Link href={"/"} className={"p-5 " + (pathname == "/" && "bg-pink-700")}>
        Início
      </Link>
      <Link
        href={"/funcionario"}
        className={
          "p-5 " + (pathname.startsWith("/funcionario") && "bg-pink-700")
        }
      >
        Funcionários
      </Link>
    </nav>
  );
};

export default Menu;
