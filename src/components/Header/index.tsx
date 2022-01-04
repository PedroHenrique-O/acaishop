import { Container } from "./styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "../../reducers/hooks";
import { Link } from "react-router-dom";
export function Header() {
  const cart = useAppSelector((state) => state.cart.products.length);

  <Link to="/cart" />;

  return (
    <Container>
      <Link to="/">
        <h1>
          Açai <span>+</span>
        </h1>
      </Link>
      <Link to="/cart">
        <div className="cartButton">
          <span> {cart}</span>
          <AiOutlineShoppingCart size="2.5rem" />
        </div>
      </Link>
    </Container>
  );
}
