import { useState } from "react";
import {
  incrementAmount,
  removeFromCart,
  decrementAmount,
} from "../../reducers/CartSlice";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { Header } from "../Header";
import { Container } from "./styled";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface Products {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  amount: number;
  price: string;
}
interface cartState {
  products: Products[];
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

          {cart.map((cart) => (
            <tbody key={cart._id}>
              <>
                <tr>
                  <td>
                    <img src={cart.image} alt={cart.name} />
                  </td>
                  <td>
                    <h3> {cart.name}</h3>
                    <p>{cart.ingredients}</p>
                  </td>

                  <td>
                    <div>
                      <span onClick={() => handleDecrementAmount(cart)}>
                        <AiOutlineMinus />
                      </span>
                      {cart.amount}
                      <span onClick={() => handleIncrementAmount(cart)}>
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </td>
                  <td> {cart.price}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      color: "#ff0000",
                      fontSize: "2rem",
                      fontWeight: "700",
                    }}
                  >
                    <span onClick={() => handleDeleteProduct(cart)}>X</span>
                  </td>
                </tr>
              </>
            </tbody>
          ))}
        </table>
      </Container>
    </>
  );
}
