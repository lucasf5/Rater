import { useParams } from "react-router-dom";
import styled from "styled-components";
import MovieList from "../../components/MovieList";
import PersonDetails from "../../components/PersonDetails";

const ActorDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageContainer>
      <MovieList personId={id || ""} />
      <PersonDetails personId={id || ""} />
    </PageContainer>
  );
};

export default ActorDetails;

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "details"
      "movies";
  }

  /* Aplica a área específica para cada componente */
  & > :first-child {
    grid-area: movies;
  }

  & > :nth-child(2) {
    grid-area: details;
  }
`;
