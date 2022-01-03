import { Container } from "./styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "../../reducers/hooks";

export function Header() {
  const cart = useAppSelector((state) => state.cart.products);
  return (
    <Container>
      <h1>
        Açai <span>+</span>
      </h1>

      <div className="cartButton">
        <span> </span>
        <AiOutlineShoppingCart size="2.5rem" />
      </div>
    </Container>
  );
}
