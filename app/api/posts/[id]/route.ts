import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const updatedPost = await prisma.post.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      title: body.title,
      content: body.content,
      authorId: 1,
    },
  });

  return NextResponse.json(updatedPost);
}
