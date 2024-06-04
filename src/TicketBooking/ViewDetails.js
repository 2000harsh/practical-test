import React from "react";
import "../style.scss";
import { Card } from "antd";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { Meta } = Card;
  const { title, rating } = useParams();

  //   const data = [
  //     {
  //       title: "Thalaivan",
  //       description: "New Action South movie",
  //       rating: "3.3",
  //     },
  //     {
  //       title: "Manjumal Boys",
  //       description: "New Thriller Movie",
  //       rating: "2.8",
  //     },
  //     {
  //       title: "Mr & miss Mahi",
  //       description: "NewIncrease Sportmanship",
  //       rating: "4.0",
  //     },
  //   ];

  const data = [
    {
      title: "Thalaivan",
      description: "New Action South movie",
      rating: "3.3",
      details: "This is a new action movie from the south.",
    },
    {
      title: "Manjumal Boys",
      description: "New Thriller Movie",
      rating: "2.8",
      details: "This is a new thriller movie with a twist.",
    },
    {
      title: "Mr & miss Mahi",
      description: "NewIncrease Sportmanship",
      rating: "4.0",
      details: "This is a new sports movie with a message.",
    },
    {
      title: "Mission Impossible",
      description: "New Action Pack",
      rating: "4.0",
      details: "This is a new movie full of actions.",
    },
  ];

  const movie = data.filter((movie) => movie.title === title)[0];

  return (
    <div>
      <h1>Detail Page</h1>
      <div className="row d-flex">
        <div className="col-md-6">
          <Card
            className="d-flex"
            hoverable
            style={{ width: 400 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
            <p>{movie.details}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
