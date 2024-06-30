import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Post } from "@prisma/client";

const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {posts.map((p) => (
        <Card key={p.id} radius="none">
          <CardHeader className="prose hover:cursor-pointer">
            <h2>{p.title}</h2>
          </CardHeader>
          <CardBody>
            {p.content.length > 100
              ? p.content.substring(0, 100) + "..."
              : p.content}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PostsList;
