"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Motorbike } from "@prisma/client";
import { formatCurrency } from "../_utils/formatCurrency";

import Link from "next/link";
import { DialogContent, DialogTrigger, Dialog } from "./ui/dialog";
import { ChevronDownIcon } from "lucide-react";

interface ProductItemProps {
  product: Motorbike;
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex min-w-[320px] max-w-[420px] flex-col items-center justify-center gap-4 rounded-lg bg-white pb-6 pt-6 shadow-lg dark:bg-white xl:min-w-[420px]">
      <h1 className="relative text-2xl font-bold text-gray dark:text-black">
        {product.name}
      </h1>
      <div className="relative h-[210px] w-[210px] lg:h-[250px] lg:w-[250px]">
        <Image
          src={
            "https://www.yamaha-motor.com.br/ccstore/v1/images/?source=/file/v6933965158267334353/products/30133.301331.png&height=300&width=300"
          }
          alt="Moto"
          fill
        />
      </div>
      <div className="flex items-baseline gap-2">
        <p className="text-sm font-medium dark:text-black">
          Preço a partir de:
        </p>
        <h1 className="text-2xl font-bold text-primary">
          {formatCurrency(Number(product.price))}
        </h1>
      </div>

      <Button
        asChild
        size="lg"
        className="mt-2 w-36 text-lg font-medium text-white"
      >
        <Link
          href={`https://wa.me/5592995263569?text=Olá,%20quero%20saber%20mais%20sobre%20a%20${product?.name}`}
          target="_blank"
        >
          Tenho interesse
        </Link>
      </Button>
      <Dialog>
        <DialogTrigger className="h-10 w-36 rounded-md bg-black text-lg font-medium text-white hover:opacity-90">
          Características
        </DialogTrigger>
        <DialogContent className="flex h-screen w-screen max-w-none flex-col items-center overflow-scroll bg-white pb-20 lg:h-fit lg:w-[1200px] lg:overflow-auto lg:px-20">
          <h1 className="mt-4 text-3xl font-bold text-gray lg:hidden">
            {product?.name}
          </h1>

          <div className="lg:flex lg:w-full lg:justify-around">
            <div className="relative mt-14 h-[250px] w-[250px] self-center rounded-md lg:h-[280px] lg:w-[280px]">
              <Image
                src="https://www.yamaha-motor.com.br/ccstore/v1/images/?source=/file/v6933965158267334353/products/30133.301331.png&height=300&width=300"
                fill
                alt={product?.name || ""}
              />
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
              <h1 className="mt-4 text-4xl font-bold text-gray">
                {product?.name}
              </h1>

              <Button
                asChild
                className="mt-8 self-center px-8 py-7 text-xl font-bold text-white"
              >
                <Link
                  href={`https://wa.me/5592995263569?text=Olá,%20quero%20saber%20mais%20sobre%20a%20${product?.name}`}
                  target="_blank"
                >
                  Tenho interesse
                </Link>
              </Button>
            </div>
          </div>

          <Button
            asChild
            className="mt-8 self-center px-8 py-6 text-lg font-bold text-white lg:hidden"
          >
            <Link
              href={`https://wa.me/5592995263569?text=Olá,%20quero%20saber%20mais%20sobre%20a%20${product?.name}`}
              target="_blank"
            >
              Tenho interesse
            </Link>
          </Button>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 lg:hidden">
            <h1 className="text-xl font-bold">Características</h1>
            <ChevronDownIcon />
          </div>
          <div className="flex flex-col justify-center gap-20 pt-14 lg:flex-row lg:justify-around lg:gap-32">
            <div className="flex flex-col gap-6 text-center">
              <div className="flex flex-col gap-4">
                <Image
                  src="/engine.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  objectPosition="center"
                  alt="motor"
                  className="self-center"
                />
                <h1 className="text-2xl font-bold lg:text-xl">Motor</h1>
              </div>
              <p className="text-2xl lg:text-xl">{product?.engine}</p>
            </div>
            <div className="flex flex-col gap-6 text-center">
              <div className="flex flex-col gap-4">
                <Image
                  src="/motorcycle.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  objectPosition="center"
                  alt="motor"
                  className="self-center"
                />
                <h1 className="text-2xl font-bold lg:text-xl">Cilindrada</h1>
              </div>
              <p className="text-2xl lg:text-xl">{product?.cylinder}</p>
            </div>
            <div className="flex flex-col gap-6 text-center">
              <div className="flex flex-col gap-4">
                <Image
                  src="/process.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  objectPosition="center"
                  alt="motor"
                  className="self-center"
                />
                <h1 className="text-2xl font-bold lg:text-xl">Transmissão</h1>
              </div>
              <p className="text-2xl lg:text-xl">{product?.transmission}</p>
            </div>
            <div className="flex flex-col gap-6 text-center">
              <div className="flex flex-col gap-4">
                <Image
                  src="/key.png"
                  width={45}
                  height={45}
                  objectFit="contain"
                  objectPosition="center"
                  alt="motor"
                  className="self-center"
                />
                <h1 className="text-2xl font-bold lg:text-xl">
                  Sistema de partida
                </h1>
              </div>
              <p className="text-2xl lg:text-xl">{product?.system}</p>
            </div>
            <div className="flex flex-col gap-6 text-center">
              <div className="flex flex-col gap-4">
                <Image
                  src="/brakes.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                  objectPosition="center"
                  alt="motor"
                  className="self-center"
                />
                <h1 className="text-2xl font-bold lg:text-xl">Freios</h1>
              </div>
              <p className="text-2xl lg:text-xl">{product?.brakes}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItem;
