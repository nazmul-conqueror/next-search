"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFood = () => {
  const [searchInput, setSearchInput] = useState("")

const searchParams = useSearchParams()
const router  = useRouter();
const pathname = usePathname();
console.log(searchParams);


  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
   if(searchInput){
    params.set("search", searchInput)
   }else{
    params.delete("search")
   }
   router.push(`${pathname}?${params.toString()}`)
    console.log(params);
    
    // const params = new URLSearchParams(searchParams);

    // if (searchInp) {
    //   params.set("search", searchInp);
    // } else {
    //   params.delete("search");
    // }

    // router.push(`${pathname}?${params.toString()}`);

    // console.log(params, "params");
    // console.log(searchInp);
  };

  return (
    <div className="text-center mt-10 space-x-2">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search by Dish Name"
        className="border px-3 py-2"
      />
      <button onClick={handleSearch} className="border px-3 py-2">
        Search
      </button>
    </div>
  );
};

export default SearchFood;