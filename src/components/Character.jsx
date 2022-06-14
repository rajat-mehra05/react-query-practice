const Character = ({ character }) => {
  return (
    <div className="flex gap-2 border border-white rounded-lg">
      <div className="overflow-hidden">
        <img
          src={character.image}
          alt="characterPic"
          className="w-60 h-60 rounded-l-lg"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col space-y-8 justify-center">
        <div className="p-2 flex flex-col">
          <p className="text-orange-500 text-3xl font-semibold">
            {character.name}
          </p>
          <p className="text-white font-semibold text-xl">
            {" "}
            {character.status} - {character.species}{" "}
          </p>
        </div>
        <div className="flex flex-col p-2">
          <span className="text-orange-300 text-xl">
            {" "}
            Last known location:{" "}
          </span>
          <p className="text-white font-semibold text-xl">
            {" "}
            {character.location.name}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;
