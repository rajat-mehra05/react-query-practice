const Pagination = ({ page, setPage }) => {
  const handlePrev = () => {
    if (page === 1) {
      alert("You are on the first page!");
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (page === 40) {
      alert("You are on the last page!");
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={handlePrev}
        className="rounded-md bg-white hover:bg-orange-400 text-black p-2 font-semibold"
      >
        {" "}
        Previous{" "}
      </button>
      <button
        onClick={handleNext}
        className="rounded-md bg-white hover:bg-orange-400 text-black p-2 font-semibold"
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
};

export default Pagination;
