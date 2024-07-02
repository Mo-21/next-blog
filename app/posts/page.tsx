import { Suspense } from "react";
import { getPosts } from "../utils/getPosts";
import PostsList from "./components/PostsList";
import NavigationBar from "../NavigationBar";
import ActionsBar from "./components/ActionsBar";
import PostsSkeleton from "../ui/skeletons/PostsSkeleton";
import { numberOfPages } from "../utils/getPageSize";
import Pagination from "./components/Pagination";
import FilterByUserSelect from "./components/FilterByUserSelect";
import { getPostsAuthors } from "../utils/getAuthors";

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
      <ActionsBar />
      <FilterByUserSelect authors={authors} />
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList posts={posts} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Page;
