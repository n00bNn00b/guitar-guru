import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/thankyou");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [agree, setAgree] = useState(false);
  return (
    <div className="container bg-light p-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Your email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Control type="text" placeholder="Your Phone Number" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Control
            type="text"
            placeholder="Your Billing Address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Control type="text" placeholder="Your City" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicZipcode">
          <Form.Control type="text" placeholder="Your Zipcode" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Control type="text" placeholder="Your Country" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Save My Billing Address"
          />
        </Form.Group>
        <Button
          disabled={!agree}
          variant="primary"
          type="submit"
          style={{ backgroundColor: "#406e8e" }}
          onClick={handleCheckout}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
