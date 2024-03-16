/*
  Warnings:

  - You are about to drop the column `complet` on the `Patients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointments" ADD COLUMN     "complet" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Patients" DROP COLUMN "complet";
