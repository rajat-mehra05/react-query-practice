const Hero = () => {
  return (
    <div className="flex justify-between items-center p-10">
      <h1 className="text-4xl text-white font-semibold underline">
        {" "}
        Rick and Morty API{" "}
      </h1>
      <h2 className="text-gray-400 hover:text-orange-300 hover:underline text-2xl font-semibold">
        {" "}
        <a
          href="https://github.com/rajat-mehra05/rickandmorty-api"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
      </h2>
    </div>
  );
};

export default Hero;
