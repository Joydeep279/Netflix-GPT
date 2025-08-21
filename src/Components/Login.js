import { useRef, useState } from "react";
import Header from "./Header";
import validFormData from "../utils/validFormData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import React from "react";
import { UserAvatar } from "../utils/constants";
const Login = () => {
  const dispatch = useDispatch();
  const email = useRef(null);
  const uName = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSignIn, setSignIn] = useState(true);
  const toggleFormType = () => {
    setSignIn(!isSignIn);
    setErrorMsg(null);
  };
  function validForm() {
    const formMsg = validFormData(email.current.value, password.current.value);

    if (formMsg !== null) {
      setErrorMsg(formMsg);
      return;
    }
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              name: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " : " + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: uName.current.value,
            photoURL: UserAvatar,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  name: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " : " + errorMessage);
        });
    }
  }
  return (
    <React.Fragment>
      <Header />
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg')] bg-cover bg-center h-screen w-screen">
        <div className="absolute mx-auto left-0 right-0 my-36 bg-black/70 w-[22%] h-[65%] flex flex-col items-center text-white">
          <form
            className="mx-auto w-2/3 flex flex-col gap-5 justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              validForm();
            }}>
            <h1 className="text-3xl font-bold text-gray-200 font-sans my-2.5">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {isSignIn ? null : (
              <input
                ref={uName}
                placeholder="Name"
                type="text"
                className="w-full h-11 rounded p-2.5 bg-gray-500 placeholder:font-medium placeholder:text-gray-300"
                name="userName"
              />
            )}
            <input
              ref={email}
              placeholder="Email"
              type="email"
              className="w-full h-11 rounded p-2.5 bg-gray-500 placeholder:font-medium placeholder:text-gray-300"
              name="userEmail"
            />
            <input
              ref={password}
              placeholder="Password"
              type="password"
              className="w-full h-12 rounded p-2.5 bg-gray-500 placeholder:font-medium placeholder:text-gray-300"
              name="userPassword"
            />
            {errorMsg ? <span className="text-red-600">{errorMsg}</span> : null}
            <button className="w-full bg-red-600 py-2.5 rounded mt-1.5 font-bold">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <span className="cursor-pointer mt-2.5" onClick={toggleFormType}>
            {isSignIn ? "new to Netflex Sign In" : "Already Registered Sign In"}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
