import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passWordRef = useRef("");

  const location = useLocation();

  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  let errorMessage = "";

  if (loading || sending) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorMessage = (
      <div>
        <p className="text-danger text-center p-3">Error: {error?.message} </p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passWordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateToSignUp = (e) => {
    navigate("/signup");
  };

  const resetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);

      toast("Password reset link has been sent!!!");
    } else {
      toast("Please input your email to reset password!");
    }
  };

  return (
    <div className="container bg bg-light p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passWordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button
            style={{ backgroundColor: "#406e8e" }}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </div>
      </Form>
      {errorMessage}
      <SocialLogin />
      <p className="pt-3" style={{ color: "#406e8e" }}>
        New to Guitar Guru?{" "}
        <span
          onClick={navigateToSignUp}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </p>
      <p style={{ color: "#406e8e" }}>
        Forgot Password?{" "}
        <span
          onClick={resetPassword}
          className="bg-light mb-1"
          style={{
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            color: "rgb(64, 110, 142)",
          }}
        >
          Reset Password
        </span>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
