-- AlterTable
ALTER TABLE `IdempotencyKey` ADD COLUMN `finalized` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `key` VARCHAR(191) NOT NULL;
