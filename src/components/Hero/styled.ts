import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url("/assets/bgAcai2.jpg");
  height: 100vh;
  background-position: bottom center;
  background-size: cover;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }

  .heroWrapp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem 3rem;
    height: 80vh;
    max-height: 100%;
    width: 550px;
    color: #fff;
    text-transform: uppercase;
    font-family: "Mukta";
    line-height: 1;
    font-weight: bold;
    @media screen and (max-width: 650px) {
      width: 50%;
      justify-content: center;
      align-items: center;
      margin: none;
    }

    h1 {
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 2px 4px #94187d;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 650px) {
      //width: 100%;
    }
  }
  button {
    margin-top: 2rem;
  }
`;
