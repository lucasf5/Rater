import styled from "styled-components";

const Card = styled.div`
  width: 1000px;
  height: 826px;
  background-color: ${({ theme }) => theme.colors.background[2]};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const HighlightTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 40px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 16px;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
`;

const MovieDetails = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
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
  color: #eee;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const CardContent = styled.div`
  padding: 15px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StarIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Description,
  HighlightTag,
  MovieDetails,
  Rating,
  StarIcon,
};
