import React from "react";
import auth from "../../../firebase.init";
import {
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

  const navigate = useNavigate();
  let errorMessage = "";

  if (loading || loadingGitHub) {
    return <Loading />;
  }

  if (error || errorGitHub) {
    errorMessage = (
      <p className="text-danger">
        Error: {error?.message} {errorGitHub?.message}
      </p>
    );
  }

  if (user || userGitHub) {
    navigate("/");
    toast("Hello");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-3"> Or </p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorMessage}
      <div>
        <Button
          style={{ backgroundColor: "#406e8e" }}
          onClick={() => signInWithGoogle()}
          className="btn  w-50 d-block mx-auto"
        >
          <img style={{ width: "40px" }} src="" alt="" />
          <span className="px-2">Google Sign In</span>
        </Button>

        <Button
          style={{ backgroundColor: "#406e8e" }}
          className="btn  w-50 d-block my-2 mx-auto"
        >
          <img style={{ width: "65px" }} src="" alt="" />
          <span className="px-2">Facebook Sign In</span>
        </Button>

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
