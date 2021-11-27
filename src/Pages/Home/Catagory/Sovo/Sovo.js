import React, { useEffect, useState } from "react";
import Sovos from "./Sovos";

const Sovo = () => {
  const [sovo, setAllsovo] = useState([]);

  useEffect(() => {
    fetch("https://infinite-beyond-28980.herokuapp.com/sovo")
      .then((res) => res.json())
      .then((data) => setAllsovo(data));
  }, []);

  return (
    <div>
      <h1 className="title p-5 m-5">Choose Your Desire SOVO</h1>

      <div className="row mx-auto container">
        {sovo.map((sovos) => (
          <Sovos key={sovos._id} sovo={sovos}></Sovos>
        ))}
      </div>
    </div>
  );
};
export default Sovo;
