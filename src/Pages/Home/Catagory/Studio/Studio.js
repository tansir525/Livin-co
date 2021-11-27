import React, { useEffect, useState } from "react";
import Studios from "./Studios";

const Studio = () => {
  const [studio, setAllstudio] = useState([]);

  useEffect(() => {
    fetch("https://infinite-beyond-28980.herokuapp.com/mension")
      .then((res) => res.json())
      .then((data) => setAllstudio(data));
  }, []);

  return (
    <div>
      <h1 className="title p-5 m-5">Choose Your Desire Mansion</h1>

      <div className="row mx-auto container">
        {studio.map((studios) => (
          <Studios key={studios._id} studio={studios}></Studios>
        ))}
      </div>
    </div>
  );
};
export default Studio;
