import { Container, NavLink } from "./styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";

import { openCart } from "../../reducers/CartSlice";
export function Header() {
  const cartLength = useAppSelector((state) => state.cart.products.length);

  const dispatch = useAppDispatch();
  const handleOpenCart = () => dispatch(openCart(true));

  return (
    <>
      <Sidebar />
      <Container>
        <Link className="logo" to="/">
          Açai <span>+</span>
        </Link>
        <nav>
          <NavLink to=""> OFERTAS </NavLink>
          <NavLink to=""> PROMOÇÕES </NavLink>
          <NavLink to=""> CONTATO </NavLink>
        </nav>

        <div onClick={handleOpenCart} className="cartButton">
          <span> {cartLength}</span>
          <AiOutlineShoppingCart size="2.5rem" />
        </div>
      </Container>
    </>
  );
}
