import React from "react";
import { useAppSelector } from "../hooks/redux";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0)
    return <h3 className="text-center font-bold">No Items(</h3>;

  return (
    <div className="flex  justify-center pt-10 mx-auto h-screen  w-[100%]">
      <ul className=" list-none">
        {favorites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
      <button className="py-1 px-4 mt-1 bg-red-400 rounded hover:shadow-md transition-all h-5">
        Remove
      </button>
    </div>
  );
};

export default FavoritesPage;
