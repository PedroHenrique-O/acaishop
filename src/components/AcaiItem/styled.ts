import styled from "styled-components";

export const ProductsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  background: white;
  color: #000;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;

  .imgWrapp {
    width: 200px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.3rem;
    }
  }

  .infoWrapp {
    margin-bottom: 1rem;
    h1 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
    p {
      color: #333;
    }
  }
`;
