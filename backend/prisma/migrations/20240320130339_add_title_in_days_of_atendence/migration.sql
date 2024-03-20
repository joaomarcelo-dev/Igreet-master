/*
  Warnings:

  - Added the required column `title` to the `DaysOfAtendence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DaysOfAtendence" ADD COLUMN     "title" TEXT NOT NULL;
