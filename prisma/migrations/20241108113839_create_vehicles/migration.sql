/*
  Warnings:

  - You are about to drop the column `id_user` on the `_sales` table. All the data in the column will be lost.
  - Added the required column `saler_id` to the `_sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `_vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturer` to the `_vehicles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `_vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_sales` DROP FOREIGN KEY `_sales_id_user_fkey`;

-- AlterTable
ALTER TABLE `_sales` DROP COLUMN `id_user`,
    ADD COLUMN `saler_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `_users` ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'client';

-- AlterTable
ALTER TABLE `_vehicle_details` ADD COLUMN `cylinders` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `fuelType` VARCHAR(191) NOT NULL DEFAULT 'gasoline',
    ADD COLUMN `typeOfclass` VARCHAR(191) NOT NULL DEFAULT 'sport';

-- AlterTable
ALTER TABLE `_vehicles` ADD COLUMN `created_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `manufacturer` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `_vehicles` ADD CONSTRAINT `_vehicles_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_sales` ADD CONSTRAINT `_sales_saler_id_fkey` FOREIGN KEY (`saler_id`) REFERENCES `_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
