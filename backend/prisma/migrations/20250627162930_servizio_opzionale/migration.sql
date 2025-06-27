-- DropForeignKey
ALTER TABLE `Richiesta` DROP FOREIGN KEY `Richiesta_servizioId_fkey`;

-- DropIndex
DROP INDEX `Richiesta_servizioId_fkey` ON `Richiesta`;

-- AlterTable
ALTER TABLE `Richiesta` MODIFY `servizioId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Richiesta` ADD CONSTRAINT `Richiesta_servizioId_fkey` FOREIGN KEY (`servizioId`) REFERENCES `Servizio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
