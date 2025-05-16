/*
  Warnings:

  - Added the required column `servizioId` to the `Appuntamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `Servizio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durata` to the `Servizio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appuntamento` ADD COLUMN `servizioId` VARCHAR(191) NOT NULL,
    MODIFY `stato` ENUM('CONFERMATO', 'IN_CORSO', 'COMPLETATO', 'CANCELLATO') NOT NULL DEFAULT 'CONFERMATO';

-- AlterTable
ALTER TABLE `Richiesta` ADD COLUMN `dataPreferita` DATETIME(3) NULL,
    ADD COLUMN `oraPreferita` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Servizio` ADD COLUMN `categoria` ENUM('MECCANICA', 'CARROZZERIA', 'GOMME', 'ARIA_CONDIZIONATA', 'LAVAGGIO', 'SANIFICAZIONE', 'REVISIONE') NOT NULL,
    ADD COLUMN `durata` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Veicolo` (
    `id` VARCHAR(191) NOT NULL,
    `targa` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modello` VARCHAR(191) NOT NULL,
    `anno` INTEGER NULL,
    `clienteId` VARCHAR(191) NOT NULL,
    `note` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Veicolo_targa_key`(`targa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appuntamento` ADD CONSTRAINT `Appuntamento_servizioId_fkey` FOREIGN KEY (`servizioId`) REFERENCES `Servizio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veicolo` ADD CONSTRAINT `Veicolo_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
