import styled from "styled-components";

const FilterContainer = styled.div`
  border-radius: 8px;
  color: ${(props) => props.theme.colors.accessibleText[12]};
  margin: auto;
  z-index: 1;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const Title = styled.h4`
  color: ${(props) => props.theme.colors.accessibleText[12]};
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const GenreButton = styled.button<{ active: boolean }>`
  padding: 8px 12px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.solid[9] : theme.colors.interactive[5]};
  border: 2px solid ${(props) => props.theme.colors.interactive[5]};
  color: ${(props) => props.theme.colors.accessibleText[12]};
  border: none;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

const DateFilterContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: ${(props) => props.theme.colors.solid[10]};

  @media (max-width: 768px) {
    font-size: 12px;
    flex-direction: column;
    gap: 4px;
  }
`;

const DateInput = styled.input`
  background-color: ${(props) => props.theme.colors.background[2]};
  color: ${(props) => props.theme.colors.accessibleText[12]};
  border: none;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 4px;
    font-size: 10px;
  }
`;

const ShowMoreButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.interactive[4]};
  cursor: pointer;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
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
