import styled from "styled-components";
export const Product = styled.li`
  list-style: none;
  flex: 1 1 230px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding-bottom: 6px;
  overflow: hidden;
  animation: transform 0.5s;
  &:hover {
    transform: scale(1.01);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductDescription = styled.div`
  padding: 6px;
`;

export const ProductTitle = styled.h3`
  font-family: Roboto;
  padding: 5px;
`;

export const ProductBrand = styled.h6`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  color: #bfbfbf;
  padding: 5px;
`;

export const ProductContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const ProductPrice = styled.p`
  font-family: Roboto;
`;

export const ProductRating = styled.button`
  border: none;
  background-color: #61a3ba;
  color: #fff;
  padding: 6px 16px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpanEl = styled.span`
  margin-right: 4px;
`;
