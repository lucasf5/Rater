import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface MovieCardProps {
  id: number;
  poster: string;
  title: string;
  year: string;
  actors: string;
  rating: number;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background[2]};
  border-radius: 8px;
  padding: 10px;
  width: 350px;
  color: ${(props) => props.theme.colors.accessibleText[12]};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.interactive[4]};
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 8px;
  }
`;

const Poster = styled.img`
  width: 60px;
  height: 90px;
  border-radius: 4px;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 50px;
    height: 75px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Year = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.separators[7]};
  margin-bottom: 10px;
`;

const Actors = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${(props) => props.theme.colors.accessibleText[11]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Star = styled.span`
  font-size: 20px;
  color: gold;
  margin-right: 5px;
`;

const Rating = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ListFilteredMovies: React.FC<MovieCardProps> = ({
  id,
  poster,
  title,
  year,
  actors,
  rating,
}) => {
  const ratingfixed = rating.toFixed(1);

  const navigation = useNavigate();

  const redirectToMovie = () => {
    navigation(`/movie/${id}`);
  };

  return (
    <CardContainer onClick={redirectToMovie}>
      <Poster src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} />
      <InfoContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Actors>{actors}</Actors>
      </InfoContainer>
      <RatingContainer>
        <Star>⭐</Star>
        <Rating>{ratingfixed}</Rating>
      </RatingContainer>
    </CardContainer>
  );
};

export default ListFilteredMovies;
