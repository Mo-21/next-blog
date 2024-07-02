import { Suspense } from "react";
import { getPosts } from "../utils/getPosts";
import PostsList from "./components/PostsList";
import NavigationBar from "../NavigationBar";
import PostsSkeleton from "../ui/skeletons/PostsSkeleton";
import { numberOfPages } from "../utils/getPageSize";
import Pagination from "./components/Pagination";
import { getPostsAuthors } from "../utils/getAuthors";
import { dynamicImport } from "./layout";

interface PostsSearchParams {
  searchParams: {
    page: string;
    user: string;
    orderBy: "asc" | "desc";
  };
}

const ActionsAccordion = dynamicImport(
  () => import("./components/ActionsAccordion"),
  { ssr: false }
);

const Page = async ({ searchParams }: PostsSearchParams) => {
  const userId = parseInt(searchParams.user);
  const currentPage = parseInt(searchParams.page);
  const PAGE_SIZE = 10;
  const posts = await getPosts(
    currentPage || 1,
    PAGE_SIZE,
    userId,
    searchParams.orderBy
  );
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
