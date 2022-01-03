import { useEffect, useState } from "react";
import { selectCount } from "../../reducers/CartSlice";
import { useAppSelector } from "../../reducers/hooks";
import { api } from "../../services/api";
import { AcaiItem } from "../AcaiItem";
import { Container } from "./styled";

interface Products {
  _id?: string;
  name: string;
  ingredients: string;
  image: string;
}

export function Shop() {
  const [products, setProducts] = useState<Products[]>([]);
  const cart = useAppSelector(selectCount);
  console.log(cart.products);

  const getProducts = async () => {
    const req = await fetch(
      "https://acaiproject-34156-default-rtdb.firebaseio.com/products.json"
    );
    //  const req = await api.get("/products");
    const data = await req.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <AcaiItem key={item._id} {...item} />
      ))}
    </Container>
  );
}
