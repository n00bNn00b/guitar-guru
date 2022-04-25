import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  return (
    <div className="container bg bg-light p-3">
      <h2 className="text-center mb-3">Register</h2>
      <Form>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Your Name"
          required
        />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
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
            style={{ backgroundColor: "#406e8e" }}
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </div>
      </Form>
      <p style={{ color: "#406e8e" }}>
        Already Have an Account?{" "}
        <span style={{ fontWeight: "bold", cursor: "pointer" }}>Login</span>
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

export default Signup;
