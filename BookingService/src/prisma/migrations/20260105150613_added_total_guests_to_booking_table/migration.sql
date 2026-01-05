/*
  Warnings:

  - You are about to drop the column `bookingStatus` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `status` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalGuests` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `bookingStatus`,
    ADD COLUMN `status` ENUM('PENDING', 'CONFIRMED', 'CANCELLED') NOT NULL,
    ADD COLUMN `totalGuests` INTEGER NOT NULL;
