import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ContactList = (props) => {
  return (
    <div>
      <h2 className="text-light">My Contact Book</h2>
      <Row xs={1} md={4} className="g-4">
        {props.allContacts.map((item, index) => (
          <Col key={item.id}>
            <Card>
              <Card.Img className="card-image" variant="top" src={item.photo} />
              <Card.Body>
                <Card.Title>{item.contact}</Card.Title>
                <Card.Title>{item.surname}</Card.Title>
                <Card.Title>{item.phone}</Card.Title>
                <Button onClick={() => props.deleteContact(item.id)}>
                  <img
                    width="25"
                    src="https://cdn-icons.flaticon.com/png/512/484/premium/484560.png?token=exp=1641377148~hmac=161f7d796faa228d18301a94cfc63362"
                    alt="delete"
                  />
                </Button>
                <Button
                  className="ms-3"
                  onClick={() => props.editContact(index)}
                >
                  <img
                    width="25"
                    src="https://cdn-icons.flaticon.com/png/512/738/premium/738880.png?token=exp=1641489522~hmac=4bdeadb5c9ddeacd14775beacf0f5846"
                    alt="edit"
                  />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactList;
