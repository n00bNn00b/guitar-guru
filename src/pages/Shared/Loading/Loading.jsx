import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center p-3">
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="success" />
    </div>
  );
};

export default Loading;
