import styled from "styled-components";

const Container = styled.div`
  background-color: #111;
  color: #fff;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-size: cover;
  background-position: center;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-right: 20px;
`;

const MovieInfo = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Details = styled.div`
  font-size: 1rem;
  span {
    margin-right: 10px;
  }
`;

const Section = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CastList = styled.div`
  display: flex;
  gap: 10px;
`;

const CastMember = styled.div`
  width: 150px;
`;

const CastImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const CastName = styled.p`
  font-size: 1rem;
  margin-top: 5px;
`;

const CastCharacter = styled.p`
  font-size: 0.875rem;
  color: #ccc;
`;

const SimilarMoviesList = styled.div`
  display: flex;
  gap: 10px;
`;

const SimilarMovie = styled.div`
  width: 150px;
`;

const SimilarMovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const SimilarMovieTitle = styled.p`
  font-size: 1rem;
  margin-top: 5px;
`;

const SimilarMovieRating = styled.p`
  font-size: 0.875rem;
  color: #ccc;
`;

export {
  CastCharacter,
  CastImage,
  CastList,
  CastMember,
  CastName,
  Container,
  Details,
  Header,
  MovieInfo,
  Overview,
  Poster,
  Section,
  SectionTitle,
  SimilarMovie,
  SimilarMovieImage,
  SimilarMovieRating,
  SimilarMovieTitle,
  SimilarMoviesList,
  Title,
};
