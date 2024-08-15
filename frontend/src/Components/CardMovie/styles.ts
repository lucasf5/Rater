import styled from "styled-components";

interface Image {
  src: string;
  popular: boolean;
}

const Card = styled.div<Image>`
  width: ${(props) => (props.popular ? "330px" : "380px")};
  height: 227px;
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

  @media (max-width: 768px) {
    width: 100%;
    height: 284px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 16px;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  border: none;
  width: 175px;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #eee;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 14px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const StarIcon = styled.img`
  font-size: 16px;
`;

export { Button, Card, CardContent, CardTitle, Rating, StarIcon };
