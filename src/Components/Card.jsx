import Card from "react-bootstrap/Card";
import "../App.css";
import "../Css/Card.css";
function BasicExample() {
  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Img variant="top" src="../assets/cardone.svg" />
      <Card.Body>
        <Card.Title className="card-title">Web Development</Card.Title>
        <Card.Text className="card-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </Card.Text>

        <button className="buttongreencard"> Click</button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
