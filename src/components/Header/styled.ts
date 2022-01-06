import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.3rem;
  height: 60px;
  background: transparent;
  margin: 0 3.5rem;
  @media screen and (max-width: 600px) {
  }

  .logo {
    font-size: 1.7rem;
    @media screen and (max-width: 750px) {
      display: flex;
      gap: 0.3rem;
    }
    span {
      color: #94187d;
    }
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  nav {
    display: flex;
    gap: 1.5rem;
    font-size: 1rem;
    a {
      cursor: pointer;
      &:hover {
        color: #94187d;
        font-size: 1.1rem;
        transition: all 0.7 ease-in-out;
      }
    }
    @media screen and (max-width: 650px) {
      display: none;
    }
  }

  .cartButton {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* @media screen and (max-width: 600px) {
      right: 180px;
      align-items: space-between;
    } */

    svg {
      &:hover {
        color: #94187d;
      }
    }

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
      @media screen and (max-width: 600px) {
      }
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
`;
