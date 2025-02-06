import { PrismaClient, CategoryChoices, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const motorbikes = [
    {
      name: "Honda PCX 160",
      price: 15490.0,
      imageUrl: "https://example.com/images/pcx160.jpg",
      category: CategoryChoices.SCOOTER,
      engine: "162,7cc",
      cylinder: "1 Cilindro",
      transmission: "Automática CVT",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "Yamaha XMAX 250",
      price: 29990.0,
      imageUrl: "https://example.com/images/xmax250.jpg",
      category: CategoryChoices.SCOOTER,
      engine: "250cc",
      cylinder: "1 Cilindro",
      transmission: "Automática CVT",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "Honda CB 500F",
      price: 36990.0,
      imageUrl: "https://example.com/images/cb500f.jpg",
      category: CategoryChoices.STREET,
      engine: "471cc",
      cylinder: "2 Cilindros",
      transmission: "Câmbio Manual de 6 marchas",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "Yamaha MT-03",
      price: 29990.0,
      imageUrl: "https://example.com/images/mt03.jpg",
      category: CategoryChoices.MT_SERIES,
      engine: "321cc",
      cylinder: "2 Cilindros",
      transmission: "Câmbio Manual de 6 marchas",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "BMW G 310 GS",
      price: 37990.0,
      imageUrl: "https://example.com/images/g310gs.jpg",
      category: CategoryChoices.TRAIL,
      engine: "313cc",
      cylinder: "1 Cilindro",
      transmission: "Câmbio Manual de 6 marchas",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "Kawasaki Ninja ZX-10R",
      price: 92990.0,
      imageUrl: "https://example.com/images/ninjazx10r.jpg",
      category: CategoryChoices.ESPORTIVA,
      engine: "998cc",
      cylinder: "4 Cilindros",
      transmission: "Câmbio Manual de 6 marchas",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "Yamaha R1",
      price: 109990.0,
      imageUrl: "https://example.com/images/r1.jpg",
      category: CategoryChoices.RACING,
      engine: "998cc",
      cylinder: "4 Cilindros",
      transmission: "Câmbio Manual de 6 marchas",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "Ducati Panigale V4",
      price: 149990.0,
      imageUrl: "https://example.com/images/panigalev4.jpg",
      category: CategoryChoices.RACING,
      engine: "1103cc",
      cylinder: "4 Cilindros",
      transmission: "Câmbio Manual de 6 marchas",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "Honda CBR 650R",
      price: 47990.0,
      imageUrl: "https://example.com/images/cbr650r.jpg",
      category: CategoryChoices.ESPORTIVA,
      engine: "649cc",
      cylinder: "4 Cilindros",
      transmission: "Câmbio Manual de 6 marchas",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
    {
      name: "BMW R 1250 RT",
      price: 129990.0,
      imageUrl: "https://example.com/images/r1250rt.jpg",
      category: CategoryChoices.SPORT_TOURING,
      engine: "1254cc",
      cylinder: "2 Cilindros Boxer",
      transmission: "Câmbio Manual de 6 marchas",
      system: "Refrigeração líquida",
      brakes: "ABS - Disco Duplo",
    },
  ];

  for (const motorbike of motorbikes) {
    await prisma.motorbike.create({
      data: motorbike,
    });
  }

  console.log("Motorbikes adicionadas com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
