import prisma from "@/prisma/prismaClient";

export const getPosts = async () =>
  await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      User: true,
    },
  });
