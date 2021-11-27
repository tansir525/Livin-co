import React from "react";
import Condo from "../Catagory/Condo/Condo";
import Duplex from "../Catagory/Duplex/Duplex";
import Flat from "../Catagory/Flat/Flat";
import Mension from "../Catagory/Mension/Mension";
import Sovo from "../Catagory/Sovo/Sovo";
import Studio from "../Catagory/Studio/Studio";

const Explore = () => {
  return (
    <div>
      <h1 className="title m-5 p-5">Feel Free to Check Our All Options</h1>
      <Mension></Mension>
      <Condo></Condo>
      <Flat></Flat>
      <Sovo></Sovo>
      <Studio></Studio>
      <Duplex></Duplex>
    </div>
  );
};

export default Explore;
