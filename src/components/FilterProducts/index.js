import { HiOutlineSearch } from "react-icons/hi";

import {
  FilterGroup,
  InputContainer,
  InputEl,
  SearchButton,
  FilterHeading,
  ListContainer,
  FilterItem,
  ClearFilterButton
} from "./styledFilter";

const categoryOptions = [
  {
    name: "Clothing",
    categoryId: "1"
  },
  {
    name: "Electronics",
    categoryId: "2"
  },
  {
    name: "Appliances",
    categoryId: "3"
  },
  {
    name: "Grocery",
    categoryId: "4"
  },
  {
    name: "Toys",
    categoryId: "5"
  }
];

const ratingList = [4, 3, 2, 1];

const FilterProducts = (props) => {
  const {
    searchInput,
    changeSearchInput,
    activeCategory,
    changeCategory,
    activeRating,
    changeRating,
    onClickSearchButton,
    setCurrentPage
  } = props;

  const clearFilterButton = () => {
    changeSearchInput("");
    changeCategory("");
    changeRating("");
  };

  return (
    <FilterGroup>
      <InputContainer>
        <InputEl
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => changeSearchInput(e.target.value)}
        />

        <SearchButton onClick={() => onClickSearchButton()}>
          <HiOutlineSearch />
        </SearchButton>
      </InputContainer>
      <ListContainer>
        <FilterHeading>Category</FilterHeading>
        {categoryOptions.map((catergory) => (
          <FilterItem
            key={catergory.categoryId}
            onClick={() => {
              changeCategory(catergory.categoryId);
              setCurrentPage(1);
            }}
            active={catergory.categoryId === activeCategory ? "#00A9FF" : ""}
          >
            {catergory.name}
          </FilterItem>
        ))}
      </ListContainer>
      <FilterHeading>Rating</FilterHeading>
      {ratingList.map((rating) => (
        <FilterItem
          key={rating}
          onClick={() => {
            changeRating(rating);
            setCurrentPage(1);
          }}
          active={rating === activeRating ? "#00A9FF" : ""}
        >
          {`${rating} & above`}
        </FilterItem>
      ))}
      <ClearFilterButton onClick={clearFilterButton}>
        Clear Filter
      </ClearFilterButton>
    </FilterGroup>
  );
};
export default FilterProducts;
