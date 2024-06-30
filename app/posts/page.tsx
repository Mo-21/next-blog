import { Suspense } from "react";
import { getPosts } from "../utils/getPosts";
import PostsList from "./components/PostsList";
import NavigationBar from "../NavigationBar";
import ActionsBar from "../ActionsBar";
import PostsSkeleton from "../ui/skeletons/PostsSkeleton";

const Page = async () => {
  const posts = await getPosts();

  return (
    <div>
      <NavigationBar />
      <ActionsBar />
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList posts={posts} />
      </Suspense>
    </div>
  );
};

export default Page;
