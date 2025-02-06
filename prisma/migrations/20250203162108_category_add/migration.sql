/*
  Warnings:

  - Added the required column `category` to the `Motorbike` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CategoryChoices" AS ENUM ('SCOOTER', 'STREET', 'TRAIL', 'ESPORTIVA', 'MT_SERIES', 'SPORT_TOURING', 'RACING');

-- AlterTable
ALTER TABLE "Motorbike" ADD COLUMN     "category" "CategoryChoices" NOT NULL;
