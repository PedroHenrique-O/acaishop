import { useState } from "react";
import { addItemToCart } from "../../reducers/CartSlice";
import { useAppDispatch } from "../../reducers/hooks";
import { Button } from "../Button/styled";
import { ProductsItem } from "./styled";

interface AcaiItemProps {
  _id?: string;
  name: string;
  image: string;
  ingredients: string;
}

export function AcaiItem(data: AcaiItemProps) {
  const [acai] = useState(data);

  const dispatch = useAppDispatch();
  const handleDispatch = () => dispatch(addItemToCart(acai));

  return (
    <ProductsItem>
      <div className="imgWrapp">
        <img src={acai.image} alt={acai.name} />
      </div>
      <div className="infoWrapp">
        <h1>{acai.name}</h1>
        <p>{acai.ingredients}</p>
      </div>
      {/* <button onClick={() => dispatch(reset())}> delete </button> */}
      <Button onClick={handleDispatch}>Adicionar +</Button>
    </ProductsItem>
  );
}
