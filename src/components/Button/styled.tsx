import styled from "styled-components";

interface AcaiItemProps {
  _id?: string;
  name: string;
  image: string;
  ingredients: string;
}
interface ButtonProps {
  onClick?: (products: AcaiItemProps) => void;
  large?: boolean;
}
export const Button = styled.button<ButtonProps>`
  background: #94187d;
  border: none;
  border-radius: 0.5rem;
  width: ${(props) => (props.large ? "16rem" : "8rem")};
  padding: ${(props) => (props.large ? "0.8rem" : "0.3rem")};
  color: ${(props) => (props.large ? "#fff" : "#eee")};
  font-size: ${(props) => props.large && "1.5em"};
  font-weight: 700;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background: darken(0.1 "#9a0680");
    transform: translateY(-2px);
    box-shadow: 2px 4px 14px rgba(229, 46, 189, 0.4);
    color: #fff;
  }
`;
