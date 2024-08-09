import {
  Container,
  FilterContainer,
  FilterCounter,
  FilterIcon,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles";

const Search = () => {
  return (
    <Container>
      <SearchContainer>
        <SearchIcon src="/svgs/search.svg" />
        <SearchInput placeholder="Pesquisar..." />
      </SearchContainer>
      <FilterContainer>
        <FilterCounter>3</FilterCounter>
        <FilterIcon src="/svgs/menu.svg" />
      </FilterContainer>
    </Container>
  );
};

export default Search;
