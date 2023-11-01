import { AiOutlineStar } from "react-icons/ai";

import {
  Product,
  ProductImage,
  ProductTitle,
  ProductBrand,
  ProductContent,
  ProductPrice,
  ProductRating,
  ProductDescription,
  SpanEl
} from "./styledProduct";

const ProductItem = (props) => {
  const { product } = props;
  const { title, brand, price, image_url, rating } = product;
  // console.log(product);
  return (
    <Product>
      <ProductImage src={image_url} alt={title} />
      <ProductDescription>
        <ProductTitle>{title}</ProductTitle>
        <ProductBrand>{brand}</ProductBrand>
        <ProductContent>
          <ProductPrice>{`Rs ${price} /-`}</ProductPrice>
          <ProductRating type="button">
            <SpanEl>{rating}</SpanEl> <AiOutlineStar />
          </ProductRating>
        </ProductContent>
      </ProductDescription>
    </Product>
  );
};

export default ProductItem;
