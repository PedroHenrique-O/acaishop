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
    }

    tbody td {
      text-align: left;
      padding-left: 2rem;

      div {
        display: flex;
        align-items: center;
        font-weight: 700;

        span {
          svg {
            fill: purple;
            cursor: pointer;
            margin-left: 0.5rem;
          }
        }

        gap: 1rem;
      }

      img {
        width: 250px;
        height: 130px;

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
`;
