import { useSelector } from "react-redux";
import Header from "./Header";

const Browse = () => {
  const isLoggedIn = useSelector((store) => store.userInfo);
  if (isLoggedIn===null) return <div>Please Login</div>;

  return (
    <div>
      <Header />
      <span>Browser</span>
    </div>
  );
};

export default Browse;
