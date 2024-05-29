-- DropForeignKey
ALTER TABLE "Appointments" DROP CONSTRAINT "Appointments_dayOfAtencenceId_fkey";

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_dayOfAtencenceId_fkey" FOREIGN KEY ("dayOfAtencenceId") REFERENCES "DaysOfAtendence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
