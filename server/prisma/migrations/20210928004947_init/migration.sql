-- CreateTable
CREATE TABLE "Restaurant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "visited" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "restaurantId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "notes" TEXT,
    CONSTRAINT "Review_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_restaurantId_unique" ON "Review"("restaurantId");
