 
import {Container,Row,Col} from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white py-3 mt-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {currentYear} ProShop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer