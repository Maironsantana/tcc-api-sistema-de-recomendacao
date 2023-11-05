-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "student_name" TEXT NOT NULL,
    "topicId" TEXT,
    "advisorId" TEXT,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_advisorId_fkey" FOREIGN KEY ("advisorId") REFERENCES "advisor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
