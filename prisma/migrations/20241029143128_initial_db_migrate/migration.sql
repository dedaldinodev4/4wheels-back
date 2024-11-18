-- CreateTable
CREATE TABLE `_users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `_users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_clients` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `identity` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `walletNumber` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `_clients_identity_key`(`identity`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_invoices` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'CANCELED', 'DONE', 'PAID', 'COMPLETED', 'ACTIVE') NOT NULL DEFAULT 'PENDING',
    `number` VARCHAR(191) NULL DEFAULT '',
    `type` VARCHAR(191) NULL,
    `year` VARCHAR(191) NULL,
    `id_payment` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `_invoices_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_payments` (
    `id` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'Kz',
    `id_paymentType` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'CANCELED', 'DONE', 'PAID', 'COMPLETED', 'ACTIVE') NOT NULL DEFAULT 'PENDING',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_payments_types` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_phones` (
    `id` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_vehicles` (
    `id` VARCHAR(191) NOT NULL,
    `acquisition_date` DATETIME(3) NOT NULL,
    `mileage` INTEGER NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `condition` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `availability` BOOLEAN NOT NULL DEFAULT true,
    `id_vehicleDetail` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_vehicle_details` (
    `id` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `license_plate` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL DEFAULT '',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_vehicle_images` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_vehicle_image_vehicles` (
    `id` VARCHAR(191) NOT NULL,
    `id_vehicle` VARCHAR(191) NOT NULL,
    `id_vehicleImage` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_sales` (
    `id` VARCHAR(191) NOT NULL,
    `id_invoice` VARCHAR(191) NOT NULL,
    `id_client` VARCHAR(191) NOT NULL,
    `id_vehicle` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `delivery_date` DATE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `status` ENUM('PENDING', 'CANCELED', 'DONE', 'PAID', 'COMPLETED', 'ACTIVE') NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_rentals` (
    `id` VARCHAR(191) NOT NULL,
    `id_invoice` VARCHAR(191) NOT NULL,
    `id_client` VARCHAR(191) NOT NULL,
    `id_vehicle` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `initial_mileage` INTEGER NOT NULL,
    `final_mileage` INTEGER NOT NULL,
    `total_price` DECIMAL(65, 30) NOT NULL,
    `insurance_type` VARCHAR(191) NULL DEFAULT 'full',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `status` ENUM('PENDING', 'CANCELED', 'DONE', 'PAID', 'COMPLETED', 'ACTIVE') NOT NULL DEFAULT 'ACTIVE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_clients` ADD CONSTRAINT `_clients_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_invoices` ADD CONSTRAINT `_invoices_id_payment_fkey` FOREIGN KEY (`id_payment`) REFERENCES `_payments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_payments` ADD CONSTRAINT `_payments_id_paymentType_fkey` FOREIGN KEY (`id_paymentType`) REFERENCES `_payments_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_phones` ADD CONSTRAINT `_phones_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_vehicles` ADD CONSTRAINT `_vehicles_id_vehicleDetail_fkey` FOREIGN KEY (`id_vehicleDetail`) REFERENCES `_vehicle_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_vehicle_image_vehicles` ADD CONSTRAINT `_vehicle_image_vehicles_id_vehicle_fkey` FOREIGN KEY (`id_vehicle`) REFERENCES `_vehicles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_vehicle_image_vehicles` ADD CONSTRAINT `_vehicle_image_vehicles_id_vehicleImage_fkey` FOREIGN KEY (`id_vehicleImage`) REFERENCES `_vehicle_images`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_sales` ADD CONSTRAINT `_sales_id_invoice_fkey` FOREIGN KEY (`id_invoice`) REFERENCES `_invoices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_sales` ADD CONSTRAINT `_sales_id_vehicle_fkey` FOREIGN KEY (`id_vehicle`) REFERENCES `_vehicles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_sales` ADD CONSTRAINT `_sales_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_sales` ADD CONSTRAINT `_sales_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `_clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_rentals` ADD CONSTRAINT `_rentals_id_invoice_fkey` FOREIGN KEY (`id_invoice`) REFERENCES `_invoices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_rentals` ADD CONSTRAINT `_rentals_id_vehicle_fkey` FOREIGN KEY (`id_vehicle`) REFERENCES `_vehicles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_rentals` ADD CONSTRAINT `_rentals_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `_clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
