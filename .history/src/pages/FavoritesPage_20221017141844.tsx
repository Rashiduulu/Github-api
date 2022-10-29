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
          <div></div>
        
          
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
