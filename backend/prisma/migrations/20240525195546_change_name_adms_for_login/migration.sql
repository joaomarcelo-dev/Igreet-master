/*
  Warnings:

  - You are about to drop the `Adms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Adms";

-- CreateTable
CREATE TABLE "Login" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);
