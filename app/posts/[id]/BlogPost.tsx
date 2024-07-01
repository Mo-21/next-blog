import { Post, User } from "@prisma/client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { deletePost } from "../actions";
import { PostWithUser } from "@/app/utils/getPosts";

const BlogPost = ({ post }: { post: PostWithUser }) => {
  return (
    <form
      action={deletePost}
      className="my-3 h-[calc(100vh-1.5rem)] flex justify-center items-center"
    >
      <Card className="h-full w-full max-w-4xl overflow-hidden">
        <Input className="hidden" name="id" defaultValue={post.id.toString()} />
        <CardHeader className="prose flex flex-col items-start min-w-full">
          <h1>{post.title}</h1>
          <div className="prose flex justify-between min-w-full">
            <h4 className="text-lg">{post.User.name}</h4>
            <span className="italic">
              {new Date(post.createdAt).toISOString().split("T")[0]}
            </span>
          </div>
          <Divider className="min-w-full mt-2" />
        </CardHeader>
        <CardBody className="prose overflow-y-auto p-4 min-w-full">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </CardBody>
        <Divider />
        <CardFooter className="p-4">
          <div className="flex justify-end gap-2 min-w-full">
            <Link href={`/posts/edit/${post.id}`}>
              <Button color="success">Update</Button>
            </Link>
            <Button color="danger" type="submit">
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default BlogPost;
