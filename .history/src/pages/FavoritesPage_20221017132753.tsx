import React, { useContext } from "react";
import { useAppSelector } from "../hooks/redux";
import { AppContext } from "../hooks/context";
const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github);
  const { ({repo} : {repo})removeFromFavorite } = useContext(AppContext);

  if (favorites.length === 0)
    return <h3 className="text-center mt-[25px] font-bold">No Items (</h3>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen  w-[100%]">
      <ul className=" list-none">
        {favorites.map((f) => (
          <li
            className="px-2 py-4 mt-3 bg-gray-500 rounded text-white hover:translate-x-2 hover:opacity-[.9] transition-all cursor-pointer "
            key={f}
          >
            <a href={f} target="_blank">
              {f}
            </a>
            <button
              onClick={removeFromFavorite}
              className="py-1 px-4 mt-1 bg-red-400 rounded hover:shadow-md transition-all"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
