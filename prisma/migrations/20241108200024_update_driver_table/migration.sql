/*
  Warnings:

  - You are about to drop the column `id_drive` on the `_rentals` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `_rentals` DROP FOREIGN KEY `_rentals_id_drive_fkey`;

-- AlterTable
ALTER TABLE `_rentals` DROP COLUMN `id_drive`,
    ADD COLUMN `id_driver` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `_rentals` ADD CONSTRAINT `_rentals_id_driver_fkey` FOREIGN KEY (`id_driver`) REFERENCES `_drives`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
