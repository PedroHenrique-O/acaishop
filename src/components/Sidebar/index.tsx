import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  incrementAmount,
  decrementAmount,
  openCart,
} from "../../reducers/CartSlice";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { formatCurrency } from "../../utilitys/formatCurrency";
import { CloseIcon, Container, Icon, CartButton, SideBtnWrap } from "./styled";

interface Products {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  amount: number;
  price: string;
}

export function Sidebar() {
  const { products, isOpen } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleIncrementAmount = (cart: Products) => {
    dispatch(incrementAmount(cart));
  };
  const handleDecrementAmount = (cart: Products) => {
    dispatch(decrementAmount(cart));
    cart.amount === 1 && toast.success("Item removido do carrinho!");
  };

  const subTotal = (amount: number, price: string) => {
    return formatCurrency(amount * parseFloat(price));
  };

  const total = products.reduce((total, item) => {
    return total + item.amount * parseFloat(item.price);
  }, 0);

  return (
    <Container isOpen={isOpen}>
      <Icon onClick={() => dispatch(openCart(false))}>
        <div className="myCartWrapp">Meu carrinho</div>
        <div className="closeIconWrapp">
          <CloseIcon />
        </div>
      </Icon>

      {products.length === 0 && (
        <div className="emptyCart"> Carrinho vazio...</div>
      )}

      {products.length > 0 &&
        products.map((products) => (
          <div className="cartWrapp">
            <div className="productItem">
              <img width={80} src={products.image} alt={products.name} />
              <div className="productInfo">
                <p>{products.name} </p>
                <p> {subTotal(products.amount, products.price)} </p>
              </div>
            </div>
            <div className="incrementAmount">
              <div onClick={() => handleDecrementAmount(products)}>
                <AiOutlineMinus size="1.3rem" />
              </div>
              <span>{products.amount}</span>
              <div onClick={() => handleIncrementAmount(products)}>
                <AiOutlinePlus size="1.3rem" />
              </div>
            </div>
          </div>
        ))}

      <SideBtnWrap>
        <div className="cartTotal">
          <div>Total:</div>
          <div>{formatCurrency(total)}</div>
        </div>

        <CartButton to=""> Finalizar </CartButton>
      </SideBtnWrap>
    </Container>
  );
}
