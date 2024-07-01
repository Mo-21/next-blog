import { Suspense } from "react";
import { getPosts } from "../utils/getPosts";
import PostsList from "./components/PostsList";
import NavigationBar from "../NavigationBar";
import ActionsBar from "./components/ActionsBar";
import PostsSkeleton from "../ui/skeletons/PostsSkeleton";
import { numberOfPages } from "../utils/getPageSize";
import Pagination from "./components/Pagination";

const Page = async ({ searchParams }: { searchParams: { page: string } }) => {
  const PAGE_SIZE = 10;
  const posts = await getPosts(parseInt(searchParams.page) || 1, PAGE_SIZE);
  const totalPages = await numberOfPages(PAGE_SIZE);

  return (
    <div>
      <NavigationBar />
      <ActionsBar />
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList posts={posts} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Page;
