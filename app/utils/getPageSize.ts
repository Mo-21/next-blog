import prisma from "@/prisma/prismaClient";

export const numberOfPages = async (pageSize: number, userId: number) => {
  const totalPosts = await prisma.post.count({
    where: {
      User: {
        id: userId || undefined,
      },
    },
  });

  return Math.ceil(totalPosts / pageSize);
};
