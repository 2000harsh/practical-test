import { Card } from "antd";
import React from "react";
import "../style.scss";
import { useNavigate } from "react-router-dom";

const ViewTicket = () => {
  const { Meta } = Card;

  const data = [
    {
      title: "Thalaivan",
      description: "New Action South movie",
      rating: "3.3",
    },
    {
      title: "Manjumal Boys",
      description: "New Thriller Movie",
      rating: "2.8",
    },
    {
      title: "Mr & miss Mahi",
      description: "NewIncrease Sportmanship",
      rating: "4.0",
    },
  ];

  return (
    <div className="container">
      {data.map((i) => (
        <Card
          className="d-flex"
          hoverable
          style={{ width: 280 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title={i.title} description={i.description} rating={i.rating} />
        </Card>
      ))}
    </div>
  );
};

export default ViewTicket;
