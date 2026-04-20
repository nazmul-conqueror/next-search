"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoryFilter = () => {
const searchParams = useSearchParams()
const router  = useRouter();
const pathname = usePathname();


  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-5 space-x-2">
      <label htmlFor="category-filter" className="mr-2">
        Filter By Category
      </label>

      <select
        id="category-filter"
        onChange={(e) => handleCategory(e.target.value)}
        defaultValue=""
        className="w-[256px] border px-2 py-1 bg-gray-600"
      >
        <option value="">Select one</option>
        <option value="dish">Dish</option>
        <option value="burger">Burger</option>
        <option value="biriyani">Biriyani</option>
        <option value="beverage">Beverage</option>
      </select>
    </div>
  );
};

export default CategoryFilter;