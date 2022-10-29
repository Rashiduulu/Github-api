import React from "react";
import { useActions } from "../hooks/actions";
import { IRepo } from "../models/models";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite } = useActions();
  const { addFavorite } = useActions();

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Whatches: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        <button
          className="py-1 px-4 mt-1 bg-yellow-400 rounded hover:shadow-md transition-all"
          onClick={addToFavorite}
        >
          Add
        </button>

        <button
          className="py-1 px-4 mt-1 bg-red-400 rounded hover:shadow-md transition-all"
          onClick={removeFromFavorite}
        >
          Remove
        </button>
      </a>
    </div>
  );
};

export default RepoCard;
