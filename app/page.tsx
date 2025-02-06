import Image from "next/image";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import ProductItem from "./_components/product-item";
import Footer from "./_components/footer";

import { db } from "./_lib/prisma";

import DesktopCarousel from "./_components/desktop-carousel";
import { Separator } from "./_components/ui/separator";
import Link from "next/link";
import ApresentationContainer from "./_components/apresentation-container";
import { MotionDiv } from "./_components/animated-component";

export default async function Home() {
  const products = await db.motorbike.findMany({
    take: 6,
  });

  return (
    <div>
      <Header />
      <DesktopCarousel />
      <ApresentationContainer />
      <MotionDiv
        className="hidden lg:block"
        initial={{ translateX: -1500 }}
        whileInView={{ translateX: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
        viewport={{ once: true }}
      >
        <h1 className="mx-4 mt-10 text-center text-[22px] font-bold lg:mt-16 lg:text-5xl">
          AQUI VOCÊ ENCONTRA UMA VARIEDADE DE MOTOS YAMAHA
        </h1>
      </MotionDiv>
      <MotionDiv
        className="lg:hidden"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "backOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="mx-4 mt-10 text-center text-[22px] font-bold lg:mt-16 lg:text-5xl">
          AQUI VOCÊ ENCONTRA UMA VARIEDADE DE MOTOS YAMAHA
        </h1>
      </MotionDiv>
      <div className="relative mx-auto mt-12 h-[75px] w-[75px] lg:hidden">
        <Image
          className="object-contain"
          src="/moto-icon.png"
          alt="Moto Icon"
          fill
        />
      </div>
      <div className="mt-6 flex items-center justify-between px-4 lg:mt-32 lg:px-32">
        <div className="w-full">
          <h1 id="last" className="text-2xl font-bold lg:text-5xl">
            ÚLTIMOS MODELOS
          </h1>
          <Separator className="h-[2px] w-full bg-primary" />
        </div>
        <Button
          variant="link"
          className="text-lg text-black hover:text-primary dark:text-white lg:hidden"
        >
          <a href="/products">Ver tudo</a>
        </Button>
      </div>
      <div className="mb-14 mt-8 grid grid-cols-1 justify-items-center gap-12 px-32 lg:mt-20 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <MotionDiv
            key={product.id}
            viewport={{ margin: "-80px", once: true }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
          >
            <ProductItem key={product.id} product={product} />
          </MotionDiv>
        ))}
      </div>
      <Link href="/products">
        <Button className="mx-auto hidden h-12 px-12 text-xl lg:flex">
          VER TODOS MODELOS
        </Button>
      </Link>
      <div id="localization" className="mb-12 mt-20 flex flex-col gap-2">
        <p className="text-center text-lg text-primary lg:text-2xl">ENDEREÇO</p>
        <h1 className="mb-4 text-center text-2xl font-bold lg:text-5xl">
          ONDE ME ENCONTRAR
        </h1>
        <div className="mx-4 rounded-xl bg-white px-4 py-4 shadow-lg lg:mx-auto lg:w-96">
          <h1 className="mb-4 text-center text-2xl text-black">UNIDADE NOME</h1>
          <p className="text-center font-sans text-xs font-bold text-black">
            Av. Nome da Rua, 1234 - Bairro - Cidade - Estado
          </p>
          <p className="mb-6 text-center font-sans text-xs font-bold text-black">
            Horário de funcionamento: 08:00 - 18:00
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.037582405219!2d-60.074991323716716!3d-3.08464479689102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c11b4d40a6f03%3A0x333f25f54b616baf!2sShopping%20Ponta%20Negra!5e0!3m2!1spt-BR!2sbr!4v1738530879455!5m2!1spt-BR!2sbr"
            width="100%"
            height="120"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
