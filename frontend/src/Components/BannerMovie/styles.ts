import styled from "styled-components";

const Card = styled.div`
  width: 1000px;
  height: 826px;
  background-color: ${({ theme }) => theme.colors.background[2]};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.colors.accessibleText[12]};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const HighlightTag = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 155px;
  gap: 5px;
`;

const Rating = styled.div`
  margin-right: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accessibleText[12]};
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Button = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
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
    background-color: rgba(255, 255, 255, 0.5);
  }

  margin-top: 48px;
`;

const CardContent = styled.div`
  padding: 48px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  bottom: 0;
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
