import React, { useEffect, useState } from "react";
import Song from "../Song/Song";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch("songs.json").then((res) =>
      res.json().then((data) => setSongs(data))
    );
  }, []);
  console.log(songs);
  return (
    <div className="container">
      <h2 className="text-center mt-3">Songs {songs.length} </h2>
      <div>
        {songs.map((song) => (
          <Song />
        ))}
      </div>
    </div>
  );
};

export default Songs;
