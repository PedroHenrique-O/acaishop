import { useState } from "react";

import { addItemToCart } from "../../reducers/CartSlice";
import { useAppDispatch } from "../../reducers/hooks";
import { Button } from "../Button/styled";
import { ProductsItem } from "./styled";

import { toast } from "react-toastify";

interface AcaiItemProps {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  amount: number;
  price: string;
}

export function AcaiItem(data: AcaiItemProps) {
  const [acai] = useState(data);

  const dispatch = useAppDispatch();
  const handleDispatch = () => {
    dispatch(addItemToCart(acai));
    toast.success("Adicionado ao carrinho!");
  };

  return (
    <ProductsItem>
      <div className="imgWrapp">
        <img src={acai.image} alt={acai.name} />
      </div>
      <div className="infoWrapp">
        <h1>{acai.name}</h1>
        <h4> R$ {acai.price} </h4>
        <p>{acai.ingredients}</p>
      </div>

      <Button onClick={handleDispatch}>Adicionar +</Button>
    </ProductsItem>
  );
}
