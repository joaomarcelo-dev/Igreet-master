-- CreateTable
CREATE TABLE "Adms" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "Adms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "dayOfAtencenceId" TEXT NOT NULL,
    "complet" BOOLEAN NOT NULL DEFAULT false,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DaysOfAtendence" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "hourStart" TEXT NOT NULL,
    "hourEnd" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "DaysOfAtendence_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_dayOfAtencenceId_fkey" FOREIGN KEY ("dayOfAtencenceId") REFERENCES "DaysOfAtendence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
