import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.interactive[3]};
  color: ${({ theme }) => theme.colors.accessibleText[12]};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.interactive[5]};
  }
`;

export { Button };
