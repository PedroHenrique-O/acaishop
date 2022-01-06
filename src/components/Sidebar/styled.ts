import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import { darken } from "polished";
interface SideBarProps {
  isOpen: boolean;
}

export const Container = styled.div<SideBarProps>`
  display: grid;
  position: fixed;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: -6px 6px 6px #333;
  z-index: 999;
  background: #eee;
  align-items: center;
  top: 4rem;
  transition: 0.3 all ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 600px) {
    width: auto;
  }

  .emptyCart {
    margin: 0 auto;
    color: black;
    padding: 1rem;
  }

  .cartWrapp {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: #000;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    span {
      display: flex;
      justify-content: center;
      min-width: 20px;
    }
    .productItem {
      display: flex;

      img {
        border-radius: 0.5rem;
      }
      .productInfo {
        margin-left: 0.5rem;
      }
    }

    .incrementAmount {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.1rem;
      gap: 0.3rem;

      div {
        svg {
          &:hover {
            color: #94187d;
          }
        }
      }
      span {
        svg {
          color: purple;
        }
      }
    }
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #94187d;
  &:hover {
    color: ${darken(0.06, "#94187d")};
  }
`;

export const Icon = styled.div`
  background: transparent;
  border: transparent;
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.3rem;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  .myCartWrapp {
    color: #000;
    flex: 1;
    font-size: 1.3rem;
    margin-right: 5rem;
    font-weight: 600;
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #94187d;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .cartTotal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #111;
    font-weight: bold;
    width: 100px;
  }
`;

export const CartButton = styled(Link)`
  flex: 1;
  background: #94187d;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: 0.2s ease-in-out;
    background: ${darken(0.09, "#94187d")};
    color: #fff;
  }
`;
