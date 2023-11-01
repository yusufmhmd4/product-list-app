import { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import FilterProduct from "./components/FilterProducts";

import {
  MainContainer,
  ProductsListContainer,
  PaginationContainer,
  PaginationButton,
  ProductHeader,
  SelectEl,
  AllProductHeading,
  GlobalStyle
} from "./styledApp";

import "./App.css";

const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)"
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)"
  }
];

const App = () => {
  const [productList, updateProductList] = useState([]);
  const [activeCategory, changeCategory] = useState("");
  const [activeRating, changeRating] = useState("");
  const [searchInput, changeSearchInput] = useState("");
  const [activeOption, changeActiveOption] = useState(
    sortbyOptions[0].optionId
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProductdata();
  }, [activeCategory, activeRating, activeOption]);

  const getProductdata = async () => {
    const productUrl = `https://apis.ccbp.in/products?sort_by=${activeOption}&category=${activeCategory}&title_search=${searchInput}&rating=${activeRating}`;
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"
      }
    };
    const response = await fetch(productUrl, options);
    const result = await response.json();
    updateProductList(result.products);
    console.log(result);
  };

  const onClickSearchButton = () => {
    getProductdata();
    setCurrentPage(1);
  };
  const changePage = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(productList.length / 6);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <FilterProduct
          searchInput={searchInput}
          changeSearchInput={changeSearchInput}
          activeCategory={activeCategory}
          changeCategory={changeCategory}
          activeRating={activeRating}
          changeRating={changeRating}
          onClickSearchButton={onClickSearchButton}
          setCurrentPage={setCurrentPage}
        />
        <div>
          <ProductHeader>
            <AllProductHeading>All Products</AllProductHeading>
            <SelectEl
              value={activeOption}
              onChange={(e) => changeActiveOption(e.target.value)}
            >
              {sortbyOptions.map((opt) => (
                <option value={opt.optionId} key={opt.optionId}>
                  {opt.displayText}
                </option>
              ))}
            </SelectEl>
          </ProductHeader>

          <ProductsListContainer>
            {productList
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
          </ProductsListContainer>
        </div>
      </MainContainer>
      <PaginationContainer>
        <PaginationButton
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <AiFillCaretLeft />
        </PaginationButton>
        {[...Array(totalPages)].map((_, i) => (
          <PaginationButton
            key={i}
            onClick={() => changePage(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <AiFillCaretRight />
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};

export default App;
