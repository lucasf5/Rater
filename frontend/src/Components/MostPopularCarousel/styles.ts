import styled from "styled-components";
import "swiper/swiper-bundle.min.css";

const MovieCarouselContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: white;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #444;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const MovieRating = styled.p`
  font-size: 16px;
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
