"use server";

import prisma from "@/prisma/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deletePost = async (formData: FormData) => {
  const id = formData.get("id") as string;
  if (id) {
    await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });

    revalidatePath("/posts");
    redirect("/posts");
  }
};
