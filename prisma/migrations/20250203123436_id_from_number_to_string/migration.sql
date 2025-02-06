/*
  Warnings:

  - The primary key for the `Motorbike` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Motorbike" DROP CONSTRAINT "Motorbike_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Motorbike_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Motorbike_id_seq";
