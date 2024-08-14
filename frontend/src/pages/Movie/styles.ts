import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Poster = styled.img`
  width: 100%;
  max-width: 1392px;
  height: 476px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 20px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1392px;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Overview = styled.p`
  font-size: 20px;
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
  width: 268.8px;
  height: 253.67px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 10px;
  cursor: pointer;
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

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Subtitle = styled.h2`
  display: flex;
  gap: 10px;
`;

const VoteCount = styled.p`
  color: ${(props) => props.theme.colors.accessibleText[11]};
  font-size: 14px;
  margin-right: 10px;
`;

const Star = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 1.25rem;
`;

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export {
  CastCharacter,
  CastImage,
  CastList,
  CastMember,
  CastName,
  Container,
  ContainerTitle,
  Details,
  GenreList,
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
  Star,
  Subtitle,
  Title,
  VoteCount,
  Link,
};
