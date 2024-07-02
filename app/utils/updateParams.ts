import { useRouter, useSearchParams } from "next/navigation";

interface UpdateParamsProps {
  userId?: number | string;
  orderDirection?: string;
  pageNumber?: number | string;
}

export const useUpdateParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParams = ({
    userId,
    orderDirection,
    pageNumber,
  }: UpdateParamsProps) => {
    const params = new URLSearchParams(searchParams);

    if (userId) {
      if (userId === "all") {
        params.delete("user");
      } else {
        params.set("user", userId?.toString());
      }
    }
    if (orderDirection) params.set("orderBy", orderDirection);
    if (pageNumber) params.set("page", pageNumber?.toString());

    router.push("?" + params.toString());
  };

  return updateParams;
};
