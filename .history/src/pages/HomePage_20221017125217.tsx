import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import AppContext from "../context";
import { useDebounce } from "../hooks/debounce";


import {
  useSearchUsersQuery,
  useLazyGetUserReposQuery,
} from "../store/github/github.api";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  const textGone = () => {
    setDropdown(false);
  };

  return (
    <AppContext.Provider></AppContext.Provider>
   
  );
};

export default HomePage;
