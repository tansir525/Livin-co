import React, { useEffect, useState } from "react";
import Flats from "./Flats";

const Flat = () => {
  const [flat, setAllflat] = useState([]);

  useEffect(() => {
    fetch("https://infinite-beyond-28980.herokuapp.com/flat")
      .then((res) => res.json())
      .then((data) => setAllflat(data));
  }, []);

  return (
    <div>
      <h1 className="title p-5 m-5">Choose Your Desire Flat Appartment</h1>

      <div className="row mx-auto container">
        {flat.map((flats) => (
          <Flats key={flats._id} flat={flats}></Flats>
        ))}
      </div>
    </div>
  );
};
export default Flat;
