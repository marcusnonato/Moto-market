-- CreateTable
CREATE TABLE "Motorbike" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,2) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "engine" TEXT NOT NULL,
    "cylinder" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "system" TEXT NOT NULL,
    "brakes" TEXT NOT NULL,

    CONSTRAINT "Motorbike_pkey" PRIMARY KEY ("id")
);
