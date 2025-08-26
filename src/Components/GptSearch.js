const GptSearch = () => {
  return (
    <div className="absolute z-50 top-[25%] left-[30%] bg-black w-[600px] h-14 p-1 rounded">
      <input
        type="text"
        className="bg-white w-[70%] h-[95%] rounded my-auto px-2.5"
        placeholder="What would you like to watch Today?"></input>
      <button className="bg-red-600 text-white px-5 py-1 rounded font-medium cursor-pointer w-[25%] ml-2.5 h-[90%]">
        Search
      </button>
    </div>
  );
};

export default GptSearch;
