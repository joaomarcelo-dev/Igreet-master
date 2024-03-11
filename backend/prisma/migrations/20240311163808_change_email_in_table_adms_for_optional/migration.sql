-- CreateTable
CREATE TABLE "DaysOfAtendence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Adms" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Adms" ("email", "id", "name", "password", "photo") SELECT "email", "id", "name", "password", "photo" FROM "Adms";
DROP TABLE "Adms";
ALTER TABLE "new_Adms" RENAME TO "Adms";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
