import { getOnePost } from "@/app/utils/getOnePost";
import BlogPost from "./BlogPost";

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await getOnePost(params.id);

  if (!post) return;

  return <BlogPost post={post} />;
};

export default Page;
