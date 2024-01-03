import Card from "react-bootstrap/Card";
import "../../Css/card/card.css";
function Cards({ imgPath, title, description }) {
  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Img variant="top" src={imgPath} />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>

        <button
          className="buttongreencard"
          onClick={() => console.log("clicked")}
        >
          {" "}
          Click
        </button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
