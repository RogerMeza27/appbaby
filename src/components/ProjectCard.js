import { Col, Card, Button } from "react-bootstrap";

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "200px",
};

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col xs={12} sm={6} md={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src={imgUrl} style={imageStyle} />
        <Card.Body>
          <Card.Title className="text-black">{title}</Card.Title>
          <span className="text-black-50 mb-2">{description}</span>
          <div className="d-flex justify-content-center mt-2">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button className="m-1 btn btn-danger">Ir al comercio</Button>
            </a>
            <Button className="m-1 btn btn-primary">Reservar</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
