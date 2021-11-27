import React from "react";
import { Card } from "react-bootstrap";

const Review = ({ reviews }) => {
  const { name, description } = reviews;
  return (
    <div className="container mx-auto my-2 col-lg-4 col-md-12">
      <Card
        style={{ width: "23rem", height: "20rem" }}
        className="h-100 bg-warning"
      >
        <Card.Body className="p-4 m-4 ">
          <Card.Title className="text-center">
            <h4 className="heading">Name: {name}</h4>
          </Card.Title>
          <hr />
          <Card.Text className="text-center">
            <h4 className="text-cente ">{description}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
