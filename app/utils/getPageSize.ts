import prisma from "@/prisma/prismaClient";


export const numberOfPages = async (pageSize: number) => {
  const totalPosts = await prisma.post.count();

  return Math.ceil(totalPosts / pageSize);
};
