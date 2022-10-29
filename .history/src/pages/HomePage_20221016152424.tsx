import React, { useState } from "react";

import { useSearchUsersQuery } from "../store/github/github.api";

const HomePage = () => {
  const [search, setSearch] = useState();

  const { isLoading, isError, data } = useSearchUsersQuery("nurtilek");
  console.log(data);
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}

      <div className=" relative w-[560px] ">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[43px] mb-2"
          placeholder="Seacrh for Github username..."
          value={search}
          onChange={e => setSearch}
        />

        <div className=" absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Drop it down !
        </div>
      </div>
    </div>
  );
};

export default HomePage;
