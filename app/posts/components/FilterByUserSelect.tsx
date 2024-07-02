"use client";

import { User } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

const FilterByUserSelect = ({ authors }: { authors: User[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParams = (userId: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("user", userId.toString());
    router.push("?" + params.toString());
  };

  return (
    <div className="mt-2 mb-4">
      <div className="relative">
        <select
          id="authors"
          name="author"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          onChange={(e) => updateParams(e.target.value)}
        >
          <option value="" disabled>
            Select an author
          </option>
          <option value="">All</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterByUserSelect;
