import MovieCarousel from "../../components/MostPopularCarousel";
import MoviesWatched from "../../components/MoviesWatched";
import PeopleCarousel from "../../components/PeopleCarousel";
import PopularMovies from "../../components/PopularMovies";
import RecommendationCarousel from "../../components/RecommendationCarousel";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <PopularMovies />
      <MovieCarousel />
      <MoviesWatched />
      <RecommendationCarousel isLoged={false} />
      <PeopleCarousel />
    </Container>
  );
};

export default Home;
