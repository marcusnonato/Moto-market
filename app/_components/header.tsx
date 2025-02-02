"use client";

import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetHeader } from "./ui/sheet";
import { useState } from "react";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="-mt-4 flex w-full items-center justify-between px-4">
        <div className="dark:hidden">
          <Image src="/logo-base.png" alt="Logo" width={110} height={110} />
        </div>
        <div className="hidden dark:block">
          <Image src="/logo-dark.png" alt="Logo" width={110} height={110} />
        </div>
        <MenuIcon
          onClick={() => setIsOpen(true)}
          className="text-primary"
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
            <p>LOCALIZAÇÃO</p>
            <p>WHATSAPP</p>
            <p>INSTAGRAM</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Header;
