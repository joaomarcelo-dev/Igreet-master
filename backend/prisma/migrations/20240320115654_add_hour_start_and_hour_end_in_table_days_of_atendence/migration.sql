/*
  Warnings:

  - You are about to drop the column `hour` on the `DaysOfAtendence` table. All the data in the column will be lost.
  - Added the required column `hourEnd` to the `DaysOfAtendence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hourStart` to the `DaysOfAtendence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DaysOfAtendence" DROP COLUMN "hour",
ADD COLUMN     "hourEnd" TEXT NOT NULL,
ADD COLUMN     "hourStart" TEXT NOT NULL;
