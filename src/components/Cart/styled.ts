import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0.8rem 8rem;

  table {
    width: 100%;
    border-radius: 10px;
    color: #000;
    background: #fff;
    padding: 1rem 0;

    thead th {
      text-align: left;
      padding-left: 2rem;
      color: #666;
    }

    tbody td {
      text-align: left;
      padding-left: 2rem;
      border-bottom: 1px solid #eee;

      div {
        display: flex;
        align-items: center;
        font-weight: 700;
        gap: 1rem;

        span {
          svg {
            color: #000;

            &:hover {
              fill: ${darken(0.1, "#94187d")};
            }
            cursor: pointer;
            margin-left: 0.5rem;
          }
        }
      }
      .deleteBtn {
        svg {
          color: #000;
          cursor: pointer;

          &:hover {
            fill: ${darken(0.1, "#94187d")};
          }
        }
      }

      img {
        width: 130px;
        height: 80px;
        border-radius: 10px;
      }
      p {
        margin-top: 1rem;
      }
    }
  }

  .cartWrapp {
    display: flex;
    background: #fff;
    padding: 10px 10px;
    border-radius: 10px;
    color: #000;

    .imgWrapp {
      width: 200px;
      height: 100px;
      margin-right: 1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .amountWrapp {
    }
  }

  footer {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;

    .cartTotal {
      margin-top: 0.3rem;
      strong {
        display: block;
      }
    }
  }
`;
