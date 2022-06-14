import { useQuery } from "react-query";

const CharacterComp = () => {
  const fetchCharacters = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    return res.json;
  };

  const { data, status } = useQuery("characters", fetchCharacters);

  console.log(data.results);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error!</p>;
  }

  return (
    <div>
      {data.results.map((character) => (
        <div key={character.id}> {character.name} </div>
      ))}
    </div>
  );
};

export default CharacterComp;
