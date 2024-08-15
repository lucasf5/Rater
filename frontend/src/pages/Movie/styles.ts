import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    max-width: 1392px;
    height: 476px;
    margin-bottom: 20px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  border-radius: 10px;

  @media (min-width: 768px) {
    gap: 20px;
    max-width: 1392px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Overview = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Details = styled.div`
  font-size: 0.875rem;

  span {
    margin-right: 5px;

    @media (min-width: 768px) {
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.div`
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const CastList = styled.div`
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

const CastMember = styled.div`
  width: 100px;

  @media (min-width: 768px) {
    width: 150px;
  }
`;

const CastImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 8px;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 253.67px;
    margin-bottom: 10px;
  }
`;

const CastName = styled.p`
  font-size: 0.875rem;
  margin-top: 5px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const CastCharacter = styled.p`
  font-size: 0.75rem;
  color: #ccc;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const SimilarMoviesList = styled.div`
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

const SimilarMovie = styled.div`
  width: 100px;

  @media (min-width: 768px) {
    width: 150px;
  }
`;

const SimilarMovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const SimilarMovieTitle = styled.p`
  font-size: 0.875rem;
  margin-top: 5px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SimilarMovieRating = styled.p`
  font-size: 0.75rem;
  color: #ccc;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Subtitle = styled.h2`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const VoteCount = styled.p`
  color: ${(props) => props.theme.colors.accessibleText[11]};
  font-size: 12px;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 0px;
    width: 45px;
  }
`;

const Star = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 10px;
  }
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
  Link,
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
};
