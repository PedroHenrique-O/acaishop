import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.3rem;
  margin: 2rem 3rem 4rem;
  padding: 0 5.5rem;

  h1 {
    span {
      color: purple;
    }
  }
  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  .cartButton {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    span {
      display: flex;
      justify-content: center;
      align-content: center;
      position: absolute;
      right: 40px;
      background-color: purple;
      border-radius: 1rem;
      padding: 0.1rem 0.7rem;
      width: 1.5rem;
    }
  }
`;
