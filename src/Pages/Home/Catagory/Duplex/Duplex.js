import React from "react";
import { useEffect, useState } from "react";
import Duplexs from "./Duplexs";

const Duplex = () => {
  const [duplex, setAllduplex] = useState([]);
  useEffect(() => {
    fetch("https://infinite-beyond-28980.herokuapp.com/duplex")
      .then((res) => res.json())
      .then((data) => setAllduplex(data));
  }, []);

  return (
    <div>
      <h1 className="title p-5 m-5">Choose Your Desire Duplex Apartment</h1>

      <div className="row mx-auto container">
        {duplex.map((duplexs) => (
          <Duplexs key={duplexs._id} duplex={duplexs}></Duplexs>
        ))}
      </div>
    </div>
  );
};

export default Duplex;
