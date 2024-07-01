import { PostWithUser } from "@/app/utils/getPosts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Post, User } from "@prisma/client";
import Link from "next/link";

const PostsList = ({ posts }: { posts: PostWithUser[] }) => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-4">
      {posts.map((p) => (
        <Card key={p.id} radius="none">
          <Link href={`/posts/${p.id}`}>
            <CardHeader className="prose hover:cursor-pointer">
              <h2>{p.title}</h2>
            </CardHeader>
          </Link>
          <CardBody>
            {p.content.length > 300
              ? p.content.substring(0, 300) + "..."
              : p.content}
          </CardBody>
          <CardFooter className="prose flex justify-between items-center min-w-full">
            <h4>{p.User.name}</h4>
            <span>{p.createdAt.toISOString().split("T")[0]}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PostsList;
