import {
  incrementAmount,
  removeFromCart,
  decrementAmount,
} from "../../reducers/CartSlice";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { Header } from "../Header";
import { Container } from "./styled";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineMinus } from "react-icons/ai";
import { Button } from "../Button/styled";
import { formatCurrency } from "../../utilitys/formatCurrency";

interface Products {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  amount: number;
  price: string;
}

export function Cart() {
  const cart = useAppSelector((state) => state.cart.products);

  const dispatch = useAppDispatch();

  const handleDeleteProduct = (cart: Products) => {
    dispatch(removeFromCart(cart));
  };
  const handleIncrementAmount = (cart: Products) => {
    dispatch(incrementAmount(cart));
  };
  const handleDecrementAmount = (cart: Products) => {
    dispatch(decrementAmount(cart));
  };

  const subTotal = (amount: number, price: string) => {
    return formatCurrency(amount * parseFloat(price));
  };

  const total = cart.reduce((total, item) => {
    return total + item.amount * parseFloat(item.price);
  }, 0);

  return (
    <>
      <Header />
      <Container>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th> Subtotal </th>
              <th> </th>
            </tr>
          </thead>

          {cart.map((products) => (
            <tbody key={products._id}>
              <>
                <tr>
                  <td>
                    <img src={products.image} alt={products.name} />
                  </td>
                  <td>
                    <h3> {products.name}</h3>
                    <p>{products.ingredients}</p>
                  </td>

                  <td>
                    <div>
                      <span onClick={() => handleDecrementAmount(products)}>
                        <AiOutlineMinus />
                      </span>
                      {products.amount}
                      <span onClick={() => handleIncrementAmount(products)}>
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </td>
                  <td>{subTotal(products.amount, products.price)}</td>
                  <td>
                    <span
                      className="deleteBtn"
                      onClick={() => handleDeleteProduct(products)}
                    >
                      <AiOutlineDelete size={20} />
                    </span>
                  </td>
                </tr>
              </>
            </tbody>
          ))}
        </table>
        <footer>
          <Button> Finalizar pedido</Button>
          <div className="cartTotal">
            <strong> Total: {formatCurrency(total)} </strong>
          </div>
        </footer>
      </Container>
    </>
  );
}
