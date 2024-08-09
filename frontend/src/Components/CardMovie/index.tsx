import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Rating,
  StarIcon,
} from "./styles";

const MovieCard = () => {
  return (
    <Card>
      <CardImage src="https://link-da-imagem.jpg" />
      <Rating>
        <StarIcon src="/svgs/star.svg" />
        <span>7.8</span>
      </Rating>
      <CardContent>
        <CardTitle>Divertidamente 2</CardTitle>
        <Button>
          <p>Assistir ao trailer</p>
          <img src="/svgs/play.svg" alt="" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
