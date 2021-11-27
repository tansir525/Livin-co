import React, { useEffect, useState } from "react";
import Condos from "./Condos";

const Condo = () => {
  const [condo, setAllcondo] = useState([]);

  useEffect(() => {
    fetch("https://infinite-beyond-28980.herokuapp.com/condo")
      .then((res) => res.json())
      .then((data) => setAllcondo(data));
  }, []);

  return (
    <div>
      <h1 className="title p-5 m-5">Choose Your Desire Condominioum</h1>

      <div className="row mx-auto container">
        {condo.map((condos) => (
          <Condos key={condos._id} condo={condos}></Condos>
        ))}
      </div>
    </div>
  );
};

export default Condo;
