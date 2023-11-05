-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advisor" (
    "id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "total_vacancies" INTEGER NOT NULL,
    "total_mentored" INTEGER NOT NULL,

    CONSTRAINT "advisor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,

    CONSTRAINT "topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Affinity" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "advisorId" TEXT,
    "topicId" TEXT,

    CONSTRAINT "Affinity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relevance" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "advisorId" TEXT,
    "topicId" TEXT,

    CONSTRAINT "Relevance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tcc" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "advisorId" TEXT NOT NULL,
    "coAdvisorId" TEXT,

    CONSTRAINT "Tcc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "advisor_name_key" ON "advisor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "topic_name_key" ON "topic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tcc_name_key" ON "Tcc"("name");

-- AddForeignKey
ALTER TABLE "Affinity" ADD CONSTRAINT "Affinity_advisorId_fkey" FOREIGN KEY ("advisorId") REFERENCES "advisor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Affinity" ADD CONSTRAINT "Affinity_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relevance" ADD CONSTRAINT "Relevance_advisorId_fkey" FOREIGN KEY ("advisorId") REFERENCES "advisor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relevance" ADD CONSTRAINT "Relevance_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tcc" ADD CONSTRAINT "Tcc_advisorId_fkey" FOREIGN KEY ("advisorId") REFERENCES "advisor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tcc" ADD CONSTRAINT "Tcc_coAdvisorId_fkey" FOREIGN KEY ("coAdvisorId") REFERENCES "advisor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
