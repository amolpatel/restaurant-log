import { PrismaClient } from "@prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 10; i++) {
    await prisma.restaurant.create({
      data: {
        name: faker.company.companyName(),
        city: faker.address.cityName(),
        visited: faker.datatype.boolean(),
        review: {
          create: 
            { rating: faker.datatype.number({min:0, max:10}), notes: faker.lorem.sentence() },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
