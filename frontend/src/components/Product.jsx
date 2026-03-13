 import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* Image at the top */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        {/* Product Name */}
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        {/* Product Rating */}
        <Rating
          value={product.rating}
          text={`${product.numReviews} reviews`}
        />

        {/* Product Price */}
        <Card.Text as="h3">
           ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;