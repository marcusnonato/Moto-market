"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "motion/react";

function ApresentationContainer() {
  return (
    <div className="relative h-[530px] w-full lg:hidden">
      <Image
        className="object-cover"
        fill
        src="/moto-banner.avif"
        alt="Banner"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col bg-black/85 pt-24 text-center text-white">
        <motion.h1
          initial={{ translateX: -500 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-2xl font-bold text-[#dcdcdc]"
        >
          MATHEUS STORE
          <br />
          PENSOU YAMAHA, PENSOU MEU NOME!
        </motion.h1>
        <motion.p
          initial={{ translateX: 500 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mx-8 mt-4 font-sans text-xs"
        >
          Aqui você encontra a moto dos seus sonhos, venha conferir nossas
          ofertas e novidades
        </motion.p>
        <motion.div
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ translateX: -500 }}
          animate={{ translateX: 0 }}
        >
          <Button
            size={"lg"}
            className="mt-12 self-center px-6 text-white hover:bg-white hover:text-black"
          >
            <a href="#last" className="text-lg">
              MOTOS
            </a>
          </Button>
        </motion.div>
        <motion.div
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ translateX: 500 }}
          animate={{ translateX: 0 }}
        >
          <Button size={"lg"} className="mt-6 self-center bg-black">
            <a
              target="_blank"
              href="https://wa.me/5592995263569"
              className="text-lg text-white"
            >
              FALE COMIGO
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default ApresentationContainer;
