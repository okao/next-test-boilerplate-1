// Import Prisma Client
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define the main function that will handle database operations
async function main() {
  console.log("Seeding database...");
  // Your seeding logic here
}

// Execute the main function and handle disconnection and errors
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
