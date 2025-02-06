"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

function BottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="link"
        className="font-sans dark:text-white"
      >
        Filtrar
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          className="flex h-full w-[90vw] flex-col gap-4 text-xl"
        >
          <SheetHeader>
            <SheetTitle className="text-2xl text-primary">CATEGORIA</SheetTitle>
          </SheetHeader>
          <Link
            onClick={() => setIsOpen(false)}
            className="mt-4 hover:text-primary"
            href="/products"
          >
            <h1>TODOS MODELOS</h1>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
            href="products?category=SCOOTER"
          >
            <h1>SCOOTER</h1>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
            href="/products?category=ESPORTIVA"
          >
            <h1>ESPORTIVA</h1>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
            href="/products?category=STREET"
          >
            <h1>STREET</h1>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
            href="/products?category=TRAIL"
          >
            <h1>TRAIL</h1>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
            href="/products?category=RACING"
          >
            <h1>RACING</h1>
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default BottomSheet;
