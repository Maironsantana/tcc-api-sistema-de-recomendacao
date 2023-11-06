/*
  Warnings:

  - Added the required column `archive` to the `Tcc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tcc" ADD COLUMN     "archive" TEXT NOT NULL;
