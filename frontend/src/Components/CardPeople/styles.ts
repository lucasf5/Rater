import styled from "styled-components";

interface Image {
  src: string;
}

const Card = styled.div<Image>`
  min-width: 240px;
  min-height: 253.67px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.colors.accessibleText[12]};
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;

  div {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.accessibleText[11]};
  }
`;

export { Card, CardContent, CardTitle };
