"use client";

import { useUpdateParams } from "@/app/utils/updateParams";

const OrderBySelect = () => {
  const updateParams = useUpdateParams();

  const orderDirections = [
    { key: "asc", label: "Oldest to newest" },
    { key: "desc", label: "Newest to oldest" },
  ];

  return (
    <div className="mt-2 mb-4">
      <div className="relative">
        <select
          id="orderDirections"
          name="orderDirections"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 p-2 text-sm outline-2 placeholder:text-gray-500"
          defaultValue={orderDirections[1].key}
          onChange={(e) => updateParams({ orderDirection: e.target.value })}
        >
          <option value="" disabled>
            Select Order Direction
          </option>
          {orderDirections.map((d) => (
            <option key={d.key} value={d.key}>
              {d.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OrderBySelect;
