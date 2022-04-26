import React from "react";
import auth from "../../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, userGitHub, loadingGitHub, errorGitHub] =
    useSignInWithGithub(auth);

  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);

  const navigate = useNavigate();
  let errorMessage = "";

  if (loading || loadingGitHub || loadingFacebook) {
    return <Loading />;
  }

  if (error || errorGitHub || errorFacebook) {
    errorMessage = (
      <p className="text-danger">
        Error: {error?.message} {errorGitHub?.message} {errorFacebook.message}
      </p>
    );
    toast("Something Went Wrong!");
  }

  if (user || userGitHub || userFacebook) {
    navigate("/");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px", backgroundColor: "#406e8e" }}
          className=" w-50"
        ></div>
        <p className="mt-2 px-3"> Or </p>
        <div
          style={{ height: "1px", backgroundColor: "#406e8e" }}
          className=" w-50"
        ></div>
      </div>
      {errorMessage}
      <div>
        <Button
          style={{ backgroundColor: "#406e8e" }}
          onClick={() => signInWithGoogle()}
          className="btn my-2  w-50 d-block mx-auto"
        >
          <img style={{ width: "40px" }} src="" alt="" />
          <span className="px-2">Google Sign In</span>
        </Button>

        {/* <Button
          style={{ backgroundColor: "#406e8e" }}
          onClick={() => signInWithFacebook()}
          className="btn  w-50 d-block my-2 mx-auto"
        >
          <img style={{ width: "65px" }} src="" alt="" />
          <span className="px-2">Facebook Sign In</span>
        </Button> */}

        <Button
          style={{ backgroundColor: "#406e8e" }}
          onClick={() => signInWithGithub()}
          className="btn  w-50 d-block mx-auto"
        >
          <img style={{ width: "40px" }} src="" alt="" />
          <span className="px-2">GitHub Sign In</span>
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SocialLogin;
