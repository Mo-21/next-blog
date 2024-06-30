import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async () =>
  await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
