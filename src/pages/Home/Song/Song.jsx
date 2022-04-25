import React from "react";
import { Button, Card } from "react-bootstrap";

const Song = ({ song }) => {
  const { song_title, image, yt_link, summary } = song;
  return (
    <div className=" m-3 col-sm-12 col-md-6 col-lg-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{song_title}</Card.Title>
          <Card.Text>{summary}</Card.Text>
          <Button
            href={yt_link}
            target="_blank"
            style={{ backgroundColor: "#406e8e" }}
          >
            Watch Video
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Song;
