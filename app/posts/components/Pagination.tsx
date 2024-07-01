"use client";

import { Pagination as Page } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const updateParams = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.push("?" + params.toString());
  };

  return (
    <div className="flex items-center justify-center gap-4 my-3">
      <Page
        showShadow
        isCompact
        showControls
        total={totalPages}
        color="success"
        page={currentPage}
        onChange={(e) => updateParams(e.toString())}
      />
    </div>
  );
};

export default Pagination;
