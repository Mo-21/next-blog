import { Suspense } from "react";
import { getPosts } from "../utils/getPosts";
import PostsList from "./components/PostsList";
import NavigationBar from "../NavigationBar";
import PostsSkeleton from "../ui/skeletons/PostsSkeleton";
import { numberOfPages } from "../utils/getPageSize";
import Pagination from "./components/Pagination";
import { getPostsAuthors } from "../utils/getAuthors";
import ActionsAccordion from "./components/ActionsAccordion";

const Page = async ({
  searchParams,
}: {
  searchParams: { page: string; user: string };
}) => {
  const userId = parseInt(searchParams.user);
  const currentPage = parseInt(searchParams.page);
  const PAGE_SIZE = 10;
  const posts = await getPosts(currentPage || 1, PAGE_SIZE, userId);
  const totalPages = await numberOfPages(PAGE_SIZE, userId);
  const authors = await getPostsAuthors();

  return (
    <div>
      <NavigationBar />
      <ActionsAccordion authors={authors} />
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList posts={posts} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Page;
