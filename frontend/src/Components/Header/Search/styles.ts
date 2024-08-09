import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.interactive[3]};
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 317px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.interactive[3]};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.interactive[5]};
  border-radius: 50%;
  margin-right: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  border-radius: 25px;
  position: relative;
`;

const FilterCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.interactive[5]};
  color: ${(props) => props.theme.colors.accessibleText[12]};
  font-size: 12px;
  position: absolute;
  top: -4px;
`;

const FilterIcon = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.interactive[5]};
  border-radius: 50%;
  margin-right: 10px;
`;

export {
  Container,
  FilterContainer,
  FilterIcon,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FilterCounter
};
