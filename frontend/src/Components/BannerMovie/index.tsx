import { useNavigate } from "react-router-dom";
import { Movie } from "../../@types/movie";
import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Description,
  HighlightTag,
  MovieDetails,
  Rating,
  StarIcon,
} from "./styles";

const BannerMovie = (movie: Movie) => {
  const { backdrop_path, title, overview, vote_average } = movie;
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/movie/${movie.id}`)}>
      <CardImage src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />

      <CardContent>
        <HighlightTag>
          <img src="/svgs/flame.svg" alt="Play" />
          Em destaque
        </HighlightTag>
        <CardTitle>{title}</CardTitle>
        <MovieDetails>
          <Rating>
            <StarIcon src="/svgs/star.svg" />
            <span>{vote_average}</span>
          </Rating>
          | 120 min | 2h 8m | Ação, Aventura | Setembro 2024
        </MovieDetails>
        <Description>{overview}</Description>
        <Button>
          <p>Assistir ao trailer</p>
          <img src="/svgs/play.svg" alt="Play" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default BannerMovie;
