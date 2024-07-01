import prisma from "@/prisma/prismaClient";

export const getPosts = async (page: number, pageSize: number) =>
  await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
    include: {
      User: true,
    },
  });
