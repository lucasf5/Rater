import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import useStore from "../../contexts/store";
import {
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
} from "./styles";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    setMovies,
    setPeople,
    setPopularMovies,
    setCurrentMovie,
    setLoading,
    setNotificationMessage,
    movies,
    people,
    popularMovies,
    loading,
  } = useStore((state) => ({
    setMovies: state.setMovies,
    setPeople: state.setPeople,
    setPopularMovies: state.setPopularMovies,
    setCurrentMovie: state.setCurrentMovie,
    setLoading: state.setLoading,
    setNotificationMessage: state.setNotificationMessage,
    movies: state.movies,
    people: state.people,
    popularMovies: state.popularMovies,
    loading: state.loading,
  }));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const movieDetails = await api.details(id);
        setMovies([movieDetails]);
        setCurrentMovie(movieDetails);

        const castDetails = await api.getDetailsPeople(id);
        setPeople(castDetails.cast);

        const similarMoviesData = await api.discover(movieDetails.genres[0].id);
        setPopularMovies(similarMoviesData.results);
      } catch (error) {
        setNotificationMessage("Erro ao carregar os detalhes do filme.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [
    id,
    setMovies,
    setPeople,
    setPopularMovies,
    setCurrentMovie,
    setLoading,
    setNotificationMessage,
  ]);

  if (loading) return <div>Carregando...</div>;

  if (!movies.length) return <div>Nenhum filme encontrado.</div>;

  const movie = movies[0];

  return (
    <Container>
      <Header
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieInfo>
          <Title>{movie.title}</Title>
          <Overview>{movie.overview}</Overview>
          <Details>
            <span>{movie.release_date}</span> | <span>{movie.runtime} min</span>{" "}
            | <span>Nota: {movie.vote_average}</span>
          </Details>
        </MovieInfo>
      </Header>

      <Section>
        <SectionTitle>Elenco Principal</SectionTitle>
        <CastList>
          {people.slice(0, 6).map((member) => (
            <CastMember key={member.id}>
              <CastImage
                src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                alt={member.name}
              />
              <CastName>{member.name}</CastName>
              <CastCharacter>{member.character}</CastCharacter>
            </CastMember>
          ))}
        </CastList>
      </Section>

      <Section>
        <SectionTitle>Filmes Semelhantes</SectionTitle>
        <SimilarMoviesList>
          {popularMovies.slice(0, 4).map((movie) => (
            <SimilarMovie key={movie.id}>
              <SimilarMovieImage
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <SimilarMovieTitle>{movie.title}</SimilarMovieTitle>
              <SimilarMovieRating>
                Nota: {movie.vote_average}
              </SimilarMovieRating>
            </SimilarMovie>
          ))}
        </SimilarMoviesList>
      </Section>
    </Container>
  );
};

export default MovieDetails;
