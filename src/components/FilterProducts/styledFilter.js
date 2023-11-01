import styled from "styled-components";

export const FilterGroup = styled.div`
  flex-shrink: 0;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 768px) {
    max-width: 300px;
    margin: 4px 10px;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid #bfbfbf;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 4px;
  padding: 10px;
`;

export const InputEl = styled.input`
  font-family: "Roboto";
  font-size: 12px;
  background: transparent;
  outline: none;
  flex-grow: 1;
  border: none;
  margin-right: 8px;
`;

export const SearchButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

export const FilterHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
`;

export const ListContainer = styled.ul`
  margin-top: 6px;
  list-style: none;
`;

export const FilterItem = styled.li`
  font-family: Roboto;
  list-style: none;
  font-size: 14px;
  padding: 4px;
  color: ${(props) => props.active};
  cursor: pointer;
  &:hover {
    color: #3498db;
  }
`;
export const ClearFilterButton = styled.button`
  color: #fff;
  background-color: #3498db;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: Roboto;
  outline: none;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 12px;
  &:hover {
    background-color: transparent;
    color: #3498db;
    border: 1px solid #3498db;
  }
`;
