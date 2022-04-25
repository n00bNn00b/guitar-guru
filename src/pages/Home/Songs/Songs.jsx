import React, { useEffect, useState } from "react";
import Song from "../Song/Song";
import "./Songs.css";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch("songs.json").then((res) =>
      res.json().then((data) => setSongs(data))
    );
  }, []);
  console.log(songs);
  return (
    <div className="container bg bg-white songs-container">
      <h2 className="text-center pt-3">Popular Songs </h2>
      <div className="row mb-2 justify-content-center text-center">
        {songs.map((song) => (
          <Song key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Songs;
