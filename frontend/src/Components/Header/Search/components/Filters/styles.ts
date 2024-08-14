import styled from "styled-components";

const FilterContainer = styled.div`
  border-radius: 8px;
  color: white;
  margin: auto;
  z-index: 1;
`;

const Title = styled.h4`
  color: #eeeeee;
  font-size: 12px;
`;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const GenreButton = styled.button<{ active: boolean }>`
  padding: 8px 12px;
  background-color: ${({ active }) => (active ? "#B4B4B4" : "#313131")};
  border: 2px solid #313131;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const DateFilterContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: #b4b4b4;
`;

const DateInput = styled.input`
  background-color: #2f2f2f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  width: 100%;
`;

const ShowMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  margin-top: 8px;
`;

export {
  DateFilterContainer,
  DateInput,
  FilterContainer,
  GenreButton,
  GenreList,
  ShowMoreButton,
  Title,
};
