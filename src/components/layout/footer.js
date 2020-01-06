import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./styles/footer.scss";
const Footer = () => {
  return (
    <Container className="py-4">
      <Row>
        <Col md={6}></Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
};

export default Footer;
