import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/UserSlice";
import { useNavigate } from "react-router";
const Header = () => {
  const userDetails = useSelector((appStore) => appStore.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black w-screen flex flex-row justify-between items-center px-20 py-2.5">
      <div>
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="w-40 h-20"
        />
      </div>
      <div className="flex gap-2.5 items-center">
        <div className="border border-white flex px-2.5 rounded py-1">
          <svg
            className="w-5 h-5"
            fill="#ffffff"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>ionicons-v5-l</title>
              <path d="M478.33,433.6l-90-218a22,22,0,0,0-40.67,0l-90,218a22,22,0,1,0,40.67,16.79L316.66,406H419.33l18.33,44.39A22,22,0,0,0,458,464a22,22,0,0,0,20.32-30.4ZM334.83,362,368,281.65,401.17,362Z"></path>
              <path d="M267.84,342.92a22,22,0,0,0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73,39.65-53.68,62.11-114.75,71.27-143.49H330a22,22,0,0,0,0-44H214V70a22,22,0,0,0-44,0V90H54a22,22,0,0,0,0,44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-31.41-41.68-43.08-68.65-43.17-68.87a22,22,0,0,0-40.58,17c.58,1.38,14.55,34.23,52.86,83.93.92,1.19,1.83,2.35,2.74,3.51-39.24,44.35-77.74,71.86-93.85,80.74a22,22,0,1,0,21.07,38.63c2.16-1.18,48.6-26.89,101.63-85.59,22.52,24.08,38,35.44,38.93,36.1a22,22,0,0,0,30.75-4.9Z"></path>
            </g>
          </svg>
          <select
            className="bg-transparent font-medium text-white text-base"
            name="language">
            <option value="option1">English</option>
            <option value="option2">Hindi</option>
          </select>
        </div>
        {userDetails ? (
          <div
            className="flex flex-row gap-2.5 justify-center items-center cursor-pointer"
            onClick={handleSignOut}>
            <img
              src={userDetails.photoURL}
              alt="user-icon"
              className="w-5 h-5"
            />
            <button className="font-medium text-white">{userDetails.name}</button>
          </div>
        ) : (
          <button
            className="bg-red-600 text-white px-5 py-1 rounded font-medium cursor-pointer"
            onClick={handleSignOut}>
            Log IN
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
