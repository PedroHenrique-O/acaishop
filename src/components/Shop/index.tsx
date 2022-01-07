import { useEffect, useState } from "react";
import { addItemToCart } from "../../reducers/CartSlice";
import { useAppDispatch } from "../../reducers/hooks";
import { api } from "../../services/api";
import { AcaiItem } from "../AcaiItem";
import { Header } from "../Header";
import { Container } from "./styled";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";

interface Products {
  _id: string;
  name: string;
  ingredients: string;
  image: string;
  amount: number;
  price: string;
}

export function Shop() {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    const req = await api.get("/products.json");
    const data = await req.data;

    setProducts(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useAppDispatch();
  const handleDispatch = (acai: Products) => {
    dispatch(addItemToCart(acai));
    toast.success("Adicionado ao carrinho!");
  };

  return (
    <>
      <Header />
      <Container>
        {isLoading && (
          <ReactLoading type="spin" color="#fff" height={"10%"} width={"10%"} />
        )}
        {products.map((item) => (
          <AcaiItem
            key={item._id}
            data={item}
            handleDispatch={() => handleDispatch(item)}
          />
        ))}
      </Container>
    </>
  );
}
