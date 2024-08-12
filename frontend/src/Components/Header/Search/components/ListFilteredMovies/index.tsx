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
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 10px;
  width: 350px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Poster = styled.img`
  width: 60px;
  height: 90px;
  border-radius: 4px;
  margin-right: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-bottom: 5px;
`;

const Year = styled.span`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`;

const Actors = styled.p`
  font-size: 14px;
  margin: 0;
  color: #ccc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
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
