import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/debounce";

import { useSearchUsersQuery } from "../store/github/github.api";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  });

  useEffect(() => {
    console.log(debounced) 
  }, [debounced]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600 ">Something went wrong...</p>
      )}

      <div className=" relative w-[560px] ">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[43px] mb-2"
          placeholder="Seacrh for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className=" list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          {isLoading && <p className="text-center">Loading...</p>}
          {data?.map(user => 
            <li key={user.id}>{ user.login }</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
