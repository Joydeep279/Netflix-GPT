import { TMBD_img_url } from "../utils/constants";

const CardListLayout = ({ data }) => {
  const { poster_path, title } = data;
  return (
    <div>
      <img src={TMBD_img_url + poster_path} className="min-w-40 min-h-44" />
      <h1 className="text-white font-medium font-sans">{title}</h1>
    </div>
  );
};

export default CardListLayout;
