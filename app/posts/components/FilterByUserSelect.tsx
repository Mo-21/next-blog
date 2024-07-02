"use client";

import { useUpdateParams } from "@/app/utils/updateParams";
import { User } from "@prisma/client";

const FilterByUserSelect = ({ authors }: { authors: User[] }) => {
  const updateParams = useUpdateParams();

  return (
    <div className="mt-2">
      <div className="relative">
        <select
          id="authors"
          name="author"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          onChange={(e) => updateParams({ userId: e.target.value })}
        >
          <option value="" disabled>
            Select an author
          </option>
          <option value="all">All</option>
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
