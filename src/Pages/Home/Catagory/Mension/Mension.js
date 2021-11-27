import React, { useEffect, useState } from "react";
import Mensions from "./Mensions";

const Mension = () => {
  const [mension, setAllmension] = useState([]);

  useEffect(() => {
    fetch("https://infinite-beyond-28980.herokuapp.com/mension")
      .then((res) => res.json())
      .then((data) => setAllmension(data));
  }, []);

  return (
    <div>
      <h1 className="title p-5 m-5">Choose Your Desire Mansion</h1>

      <div className="row mx-auto container">
        {mension.map((mensions) => (
          <Mensions key={mensions._id} mension={mensions}></Mensions>
        ))}
      </div>
    </div>
  );
};
export default Mension;
