import { useNavigate } from "react-router-dom";
import { Movie } from "../../@types/movie";
import {
  Button,
  Card,
  CardContent,
  CardTitle,
  Rating,
  StarIcon,
} from "./styles";

const CardMovie = (movie: Movie) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <Card
      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      popular={movie.popular}
      onClick={handleClick}
    >
      <Rating>
        <StarIcon src="/svgs/star.svg" />
        <span>{movie.vote_average.toFixed(1)}</span>
      </Rating>
      <CardContent>
        <CardTitle>{movie.title}</CardTitle>
        <Button>
          <p>Assistir ao trailer</p>
          <img src="/svgs/play.svg" alt="Play" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardMovie;
