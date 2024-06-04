import { Button, Card } from "antd";
import React from "react";
import "../style.scss";
import { useNavigate } from "react-router-dom";

const ViewTicket = () => {
  const { Meta } = Card;
  const navigate = useNavigate();

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
      description: "New Increase Sportmanship",
      rating: "4.0",
    },
    {
      title: "Mission Impossible",
      description: "New Action",
      rating: "4.5",
    },
  ];

  const handleClick = (title) => {
    navigate(`/TicketDetails/${title}`);
  };

  const handleClick2 = (title) => {
    navigate(`/ViewDetails/${title}`);
  };

  return (
    <div className="container">
      {/* <p>Movie List</p> */}
      {data.map((i) => (
        <Card
          className="d-flex"
          hoverable
          style={{ width: 280, border: "1px solid black" }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          {/* <Meta title={i.title} /> */}
          <h3>{i.title}</h3>
          {/* description={i.description} rating={i.rating} */}
          <div className="mt-3">
            <Button className="b1" onClick={() => handleClick2(i.title)}>
              View Details
            </Button>
            <Button className="b2" onClick={() => handleClick(i.title)}>
              Book Tickets
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ViewTicket;
