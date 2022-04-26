import React from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  return (
    <div className="container bg bg-light p-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
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
      <SocialLogin />
      <p style={{ color: "#406e8e" }}>
        New to Guitar Guru?{" "}
        <span style={{ fontWeight: "bold", cursor: "pointer" }}>Register</span>
      </p>
      <p style={{ color: "#406e8e" }}>
        Forgot Password?{" "}
        <span style={{ fontWeight: "bold", cursor: "pointer" }}>
          Reset Password
        </span>
      </p>
    </div>
  );
};

export default Login;
