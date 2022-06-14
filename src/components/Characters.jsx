import { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";
import Pagination from "./Pagination";

const API_URL = "https://rickandmortyapi.com/api/character";

const Characters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const res = await fetch(`${API_URL}?page=${queryKey[1]}`);
    return res.json();
  };

  const { data, status } = useQuery(["characters", page], fetchCharacters, {
    keepPreviousData: true,
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error!</p>;
  }

  return (
    <>
      <Pagination page={page} setPage={setPage} />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 p-4">
        {data.results.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </div>
    </>
  );
};

export default Characters;
