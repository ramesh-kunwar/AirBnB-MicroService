/*
  Warnings:

  - A unique constraint covering the columns `[idempotencyKeyId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `idempotencyKeyId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Booking_idempotencyKeyId_key` ON `Booking`(`idempotencyKeyId`);

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_idempotencyKeyId_fkey` FOREIGN KEY (`idempotencyKeyId`) REFERENCES `IdempotencyKey`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
