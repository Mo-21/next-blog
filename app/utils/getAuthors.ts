import prisma from "@/prisma/prismaClient";

export const getPostsAuthors = async () =>
  await prisma.user.findMany({
    where: {
      Post: {
        some: {},
      },
    },
    include: {
      Post: true,
    },
  });
