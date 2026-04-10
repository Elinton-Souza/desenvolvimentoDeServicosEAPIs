-- CreateTable
CREATE TABLE `Selecao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pais` VARCHAR(191) NOT NULL,
    `continente` VARCHAR(191) NOT NULL,
    `numCopa` INTEGER NULL,
    `treinador` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jogador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `posicao` ENUM('GOLEIRO', 'LATERAL', 'ZAGUEIRO', 'MEIO_CAMPO', 'ATACANTE') NOT NULL,
    `numCamisa` INTEGER NOT NULL,
    `selecaoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Jogador` ADD CONSTRAINT `Jogador_selecaoId_fkey` FOREIGN KEY (`selecaoId`) REFERENCES `Selecao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
