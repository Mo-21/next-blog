"use client";

import { useUpdateParams } from "@/app/utils/updateParams";
import { Pagination as Page } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const updateParams = useUpdateParams();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <div className="flex items-center justify-center gap-4 my-3">
      <Page
        showShadow
        isCompact
        showControls
        total={totalPages}
        color="success"
        page={currentPage}
        onChange={(e) => updateParams({ pageNumber: e.toString() })}
      />
    </div>
  );
};

export default Pagination;
