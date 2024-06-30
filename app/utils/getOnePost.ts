import prisma from "@/prisma/prismaClient";

export const getOnePost = async (id: string) =>
  prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
