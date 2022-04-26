import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateToLogin = (e) => {
    navigate("/login");
  };
  let errorMessage = "";

  if (error || errorProfile) {
    errorMessage = (
      <p>
        Error: {error?.message} {errorProfile?.message}
      </p>
    );
  }

  if (loading || updating) {
    return <Loading />;
  }

  if (user) {
    navigate("/");
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.formBasicName.value;
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Profile has been updated!");
    navigate("/home");
    console.log(name, email, password);
  };

  return (
    <div className="container bg bg-light p-3">
      <h2 className="text-center mb-3">Register</h2>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            name="name"
            className="mb-3"
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            style={{ color: "#406e8e" }}
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Agree with terms and conditions?"
            className={`${agree ? "" : "text-danger"}`}
          />
        </Form.Group>

        <div className="text-center">
          <Button
            disabled={!agree}
            style={{ backgroundColor: "#406e8e" }}
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </div>
      </Form>

      {errorMessage}
      <SocialLogin />
      <p className="pt-3" style={{ color: "#406e8e" }}>
        Already Have an Account?{" "}
        <span
          onClick={navigateToLogin}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          Login
        </span>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Signup;
