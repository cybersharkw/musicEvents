/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_organizerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_EventCategories" DROP CONSTRAINT "_EventCategories_B_fkey";

-- DropTable
DROP TABLE "public"."Event";

-- CreateTable
CREATE TABLE "public"."musicEvent" (
    "id" SERIAL NOT NULL,
    "titel" TEXT NOT NULL,
    "organizerId" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "plz" INTEGER NOT NULL,
    "place" TEXT NOT NULL,
    "region" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventStartDate" TIMESTAMP(3) NOT NULL,
    "eventEndDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "musicEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."musicEvent" ADD CONSTRAINT "musicEvent_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "public"."Organizer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_EventCategories" ADD CONSTRAINT "_EventCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."musicEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
