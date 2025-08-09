// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: "Vintage Camera",
        description: "A classic film camera for retro lovers.",
        price: 120.50,
        imageUrl: "https://placehold.co/600x400?text=Vintage+Camera"
      },
      {
        title: "Wireless Headphones",
        description: "Noise cancelling and crystal clear sound.",
        price: 89.99,
        imageUrl: "https://placehold.co/600x400?text=Wireless+Headphones"
      },
      {
        title: "Leather Backpack",
        description: "Handmade and durable, perfect for travel.",
        price: 150.00,
        imageUrl: "https://placehold.co/600x400?text=Leather+Backpack"
      }
    ]
  });

  console.log("✅ Seed data inserted!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });