import CardListLayout from "./CardListLayout";

const CardList = ({ title, movies }) => {
  return (
    <div className="flex flex-col bg-black">
      <h1 className="text-white text-4xl font-medium pb-2.5">{title}</h1>
      <div className="flex flex-row gap-2.5 overflow-x-scroll bg-scroll px-2.5 no-scrollbar">
        {movies &&
          movies.map((item) => <CardListLayout data={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default CardList;
