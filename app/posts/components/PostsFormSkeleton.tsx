"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostsFormSkeleton = () => {
  return (
    <form className="flex flex-col gap-3 mt-4">
      <Skeleton height="2rem" />

      <Skeleton count={5} />

      <Skeleton />
    </form>
  );
};

export default PostsFormSkeleton;
