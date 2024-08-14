import { useEffect, useState } from "react";
import { api } from "../../api";
import useStore from "../../contexts/store";
import TitleCards from "../Typography";
import {
  Link,
  MovieCard,
  MovieGrid,
  MovieInfo,
  MovieListContainer,
  Pagination,
  Rating,
} from "./styles";
import chevronLeftDisabled from "/svgs/chevron-left-disabled.svg";
import chevronLeft from "/svgs/chevron-left.svg";
import chevronRightDisabled from "/svgs/chevron-right-disabled.svg";
import chevronRight from "/svgs/chevron-right.svg";
import star from "/svgs/star.svg";

const MovieList = ({ personId }: { personId: string }) => {
  const { moviesByActor, setMoviesByActor, setLoading, loading } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = moviesByActor.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await api.getMoviesByActor(personId);
        setMoviesByActor(data.cast);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [personId, setMoviesByActor, setLoading]);

  if (loading || !moviesByActor) {
    return <p>Carregando...</p>;
  }

  const totalPages = Math.ceil(moviesByActor.length / itemsPerPage);

  return (
    <MovieListContainer>
      <TitleCards title="Filmes e séries" />
      <MovieGrid>
        {currentItems.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieInfo>
                <h4>{movie.title}</h4>
                <Rating>
                  <img src={star} alt="Rating" />
                  {movie.vote_average.toFixed(1)}
                </Rating>
                <p>{movie.character}</p>
                <p>{movie.release_date.split("-")[0]}</p>
              </MovieInfo>
            </MovieCard>
          </Link>
        ))}
      </MovieGrid>
      <Pagination>
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img
            src={currentPage === 1 ? chevronLeftDisabled : chevronLeft}
            alt="Previous"
          />
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <img
            src={
              currentPage === totalPages ? chevronRightDisabled : chevronRight
            }
            alt="Next"
          />
        </button>
      </Pagination>
    </MovieListContainer>
  );
};

export default MovieList;
