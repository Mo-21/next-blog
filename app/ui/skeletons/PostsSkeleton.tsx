import { Card, CardHeader, CardBody, Skeleton } from "@nextui-org/react";

const PostsSkeleton = () => {
  const posts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {posts.map((p) => (
        <Card key={p.id} radius="none">
          <CardHeader className="prose hover:cursor-pointer">
            <Skeleton />
          </CardHeader>
          <CardBody>
            <Skeleton className="w-3/5 rounded-lg" />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PostsSkeleton;
