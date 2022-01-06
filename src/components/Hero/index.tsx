import { Link } from "react-router-dom";
import { Button } from "../Button/styled";
import { Header } from "../Header";
import { Container } from "./styled";

export function Hero() {
  return (
    <>
      <Container>
        <Header />
        <div className="heroWrapp">
          <h1>
            Confira nossas promoções e experimente já o melhor açaí da região!
          </h1>

          <Link to="/shop">
            <Button large> Peça já!</Button>
          </Link>
        </div>
      </Container>
    </>
  );
}
