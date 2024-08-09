import styled from "styled-components";

const Card = styled.div`
  width: 380px;
  height: 253.67px;
  background-color: ${({ theme }) => theme.colors.background[2]};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Rating = styled.div`
  font-weight: semibold;
  display: flex;
  align-items: center;
  position: absolute;
  gap: 5px;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 20px;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  width: 184px;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;

  color: #eee;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StarIcon = styled.img`
  font-size: 16px;
`;

export { Button, Card, CardContent, CardImage, CardTitle, Rating, StarIcon };
