import { useState } from "react";
import { formatCurrency } from "../../utilitys/formatCurrency";
import { Button } from "../Button/styled";
import { ProductsItem } from "./styled";

interface AcaiItemProps {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  amount: number;
  price: string;
}
interface AcaiProps {
  handleDispatch: (item: AcaiItemProps) => void;
  data: AcaiItemProps;
}

export function AcaiItem({ data, handleDispatch }: AcaiProps) {
  const [acai] = useState(data);

  return (
    <ProductsItem>
      <div className="imgWrapp">
        <img src={acai.image} alt={acai.name} />
      </div>
      <div className="infoWrapp">
        <h1>{acai.name}</h1>

        <h4> {formatCurrency(parseFloat(acai.price))} </h4>
        <p>{acai.ingredients}</p>
      </div>

      <Button onClick={() => handleDispatch(acai)}>Adicionar +</Button>
    </ProductsItem>
  );
}
