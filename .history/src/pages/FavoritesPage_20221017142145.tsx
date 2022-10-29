import React, { useContext } from "react";
import { useAppSelector } from "../hooks/redux";
import { AppContext } from "../hooks/context";
const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github);
  const { removeFromFavorite }:any = useContext(AppContext);

  if (favorites.length === 0)
    return <h3 className="text-center mt-[25px] font-bold">No Items (</h3>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen  w-[100%]">
      <ul className=" list-none">
        {favorites.map((f) => (
          <div className="flex items-center">
            <li
              className=" px-2 py-4 mt-3 bg-gray-500 rounded text-white hover:translate-x-2 hover:opacity-[.9] transition-all cursor-pointer "
              key={f}
            >
              <a href={f} target="_blank">
                {f}
              </a>
            </li>
            <button
              onClick={removeFromFavorite}
              className="px-2 py-4 mt-3 ml-3  bg-red-400 rounded opacity-[.8] hover:opacity-[1] transition-all"
            >
              x
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
