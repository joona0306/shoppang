import React from "react";
import { Common } from "../../../styles/LayoutStyles";
import styled from "@emotion/styled";

const SearchForm = styled.form`
  width: 328px;
  height: 36px;
  border: 1px solid ${Common.color.g600};
  border-radius: 18px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 12px;

  img {
    width: 24px;
  }
  input {
    width: 185px;
    height: 18px;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    border: none;
    margin-left: 11px;
    margin-right: 50px;
  }
  input::placeholder {
    color: #a8a8a8;
  }
  button {
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    color: #a8a8a8;
    cursor: pointer;
  }
`;

const SearchFom = ({ search, setSearch, setFilters }) => {
  const handleSearch = e => {
    const value = e.target.value;
    setSearch(value);
    if (value.length === 0) {
      setFilters(true);
    }
  };

  const handleSearchSb = e => {
    e.preventDefault();
    setFilters(false);
  };
  return (
    <>
      <SearchForm
        onSubmit={e => {
          handleSearchSb(e);
        }}
      >
        <img src="/assets/images/header_images/Leading_Icon.svg" />
        <input
          placeholder="장바구니 목록을 검색해보세요"
          type="text"
          value={search}
          onChange={e => {
            handleSearch(e);
          }}
        />
        <button type="submit">검색</button>
      </SearchForm>
    </>
  );
};

export default SearchFom;
