-- DropForeignKey
ALTER TABLE "Appointments" DROP CONSTRAINT "Appointments_patientId_fkey";

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
