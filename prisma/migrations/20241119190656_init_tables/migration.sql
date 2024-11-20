/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bairro` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celular` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `bairro` VARCHAR(191) NOT NULL,
    ADD COLUMN `celular` INTEGER NOT NULL,
    ADD COLUMN `cep` INTEGER NOT NULL,
    ADD COLUMN `cidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `complemento` VARCHAR(191) NULL,
    ADD COLUMN `cpf` INTEGER NOT NULL,
    ADD COLUMN `endereco` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_cpf_key` ON `Users`(`cpf`);
