import styled from "styled-components";
import "swiper/swiper-bundle.min.css";

const MovieCarouselContainer = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const Card = styled.div`
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: white;
  width: 100%;

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #444;

  @media (max-width: 768px) {
    border-bottom: 1px solid #333;
  }
`;

const CardContent = styled.div`
  padding: 10px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 8px 0;
  }
`;

const MovieRating = styled.p`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TrailerButton = styled.a`
  display: inline-block;
  padding: 10px;
  background-color: #666;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 10px;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export {
  Card,
  CardContent,
  CardImage,
  MovieCarouselContainer,
  MovieRating,
  MovieTitle,
  Title,
  TrailerButton,
};
