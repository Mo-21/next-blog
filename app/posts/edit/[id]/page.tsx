import { getOnePost } from "@/app/utils/getOnePost";
import dynamic from "next/dynamic";

const EditPost = dynamic(() => import("./EditPostForm"), {
  ssr: false,
});

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await getOnePost(params.id);

  if (!post) return;

  return (
    <div>
      <EditPost post={post} id={params.id} />
    </div>
  );
};

export default Page;
