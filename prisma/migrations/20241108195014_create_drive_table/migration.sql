-- AlterTable
ALTER TABLE `_rentals` ADD COLUMN `id_drive` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `_drives` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `identity` VARCHAR(191) NOT NULL,
    `birth` DATETIME(3) NOT NULL,
    `breed` VARCHAR(191) NULL DEFAULT 'black',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_rentals` ADD CONSTRAINT `_rentals_id_drive_fkey` FOREIGN KEY (`id_drive`) REFERENCES `_drives`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
