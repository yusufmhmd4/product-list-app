import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ProductsListContainer = styled.ul`
  list-style: none;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 20px;
`;

export const PaginationContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px 10px;
`;

export const PaginationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "rgb(57, 46, 119)" : "")};
  border: ${(props) => (props.active ? "1px solid #bfbfbf" : "")};
  border-radius: 4px;
  padding: 10px;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const SelectEl = styled.select`
  padding: 4px;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  cursor: pointer;
`;

export const AllProductHeading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
