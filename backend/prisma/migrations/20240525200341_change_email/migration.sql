/*
  Warnings:

  - Made the column `email` on table `Login` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Login" ALTER COLUMN "email" SET NOT NULL;
