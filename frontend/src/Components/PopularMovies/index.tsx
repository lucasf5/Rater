import { useEffect } from "react";
import { api } from "../../api";
import BannerMovie from "../BannerMovie";
import MovieCard from "../CardMovie";
import TitleCards from "../Typography";
import { Container, ContainerMostPopular, ContainerRatings } from "./styles";
import useStore from "../../contexts/store";

const PopularMovies = () => {
  const {popularMovies, setPopularMovies} = useStore();
  useEffect(() => {
    api.popularMovies().then((response) => {
      setPopularMovies(response.results);
    });
  }, []);
  return (
    <Container>
      <BannerMovie {...popularMovies[0]} />
      <ContainerMostPopular>
        <TitleCards title="Destaques também" />
        <ContainerRatings>
          {popularMovies.slice(1, 4).map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </ContainerRatings>
      </ContainerMostPopular>
    </Container>
  );
};

export default PopularMovies;
