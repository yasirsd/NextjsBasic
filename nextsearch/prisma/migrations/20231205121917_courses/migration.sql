-- CreateTable
CREATE TABLE `course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `discription` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `isFree` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
