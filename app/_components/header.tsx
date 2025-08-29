"use client";

import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetHeader } from "./ui/sheet";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

interface HeaderProps {
  isMenuOpen?: boolean;
}

function Header({ isMenuOpen }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between px-[550px] text-xl font-bold max-lg:hidden">
        <Link className="hover:text-primary" href="/">
          INÍCIO
        </Link>
        <Link className="hover:text-primary" href="/products">
          MOTOS
        </Link>
        <div className="cursor-pointer dark:hidden">
          <Link href="/">
            <Image src="/logo-base.png" alt="Logo" width={90} height={90} />
          </Link>
        </div>
        <div className="hidden cursor-pointer dark:block">
          <Link href="/">
            <Image src="/logo-dark.png" alt="Logo" width={90} height={90} />
          </Link>
        </div>
        <Link className="hover:text-primary" href="/#localization">
          LOCALIZAÇÃO
        </Link>
        <Link
          className="hover:text-primary"
          href="https://wa.me/5592995263569?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21"
        >
          WHATSAPP
        </Link>
      </div>
      <div className="-mt-4 flex w-full items-center justify-between px-4 lg:hidden">
        <div className="cursor-pointer dark:hidden">
          <Link href="/">
            <Image src="/logo-base.png" alt="Logo" width={110} height={110} />
          </Link>
        </div>
        <div className="hidden cursor-pointer dark:block">
          <Link href="/">
            <Image src="/logo-dark.png" alt="Logo" width={110} height={110} />
          </Link>
        </div>
        <MenuIcon
          onClick={() => setIsOpen(true)}
          className={`text-primary dark:text-white ${isMenuOpen ? "hidden" : "block"}`}
          size={24}
        />
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className={`w-10/12`} side={"left"}>
          <SheetHeader className="-mt-6">
            <div className="dark:hidden">
              <Image src="/logo-base.png" alt="Logo" width={90} height={90} />
            </div>
            <div className="hidden dark:block">
              <Image src="/logo-dark.png" alt="Logo" width={90} height={90} />
            </div>
          </SheetHeader>
          <div className="flex flex-col gap-5 pt-10 text-lg font-bold">
            <a onClick={() => setIsOpen(false)} href="#last">
              MOTOS
            </a>
            <a onClick={() => setIsOpen(false)} href="#localization">
              LOCALIZAÇÃO
            </a>
            <p>WHATSAPP</p>
            <p>INSTAGRAM</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
