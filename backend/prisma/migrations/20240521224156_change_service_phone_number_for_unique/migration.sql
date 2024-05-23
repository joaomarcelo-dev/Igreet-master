/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Service_phone_key" ON "Service"("phone");
