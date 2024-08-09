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

const BannerMovie = () => {
  return (
    <Card>
      <CardImage src="https://link-da-imagem.jpg" alt="Deadpool & Wolverine" />
      <HighlightTag>
        <img src="/svgs/flame.svg" alt="Play" />
        Em destaque
      </HighlightTag>
      <Rating>
        <StarIcon src="/svgs/star.svg" />
        <span>8.2</span>
      </Rating>
      <CardContent>
        <CardTitle>Deadpool & Wolverine</CardTitle>
        <MovieDetails>
          120 min | 2h 8m | Ação, Aventura | Setembro 2024
        </MovieDetails>
        <Description>
          Deadpool recebe uma oferta da Autoridade de Variância Temporal para se
          juntar ao Universo Cinematográfico Marvel, mas as coisas não saem como
          o esperado, resultando em uma aliança com o Wolverine para salvar seu
          universo da extinção.
        </Description>
        <Button>
          <p>Assistir ao trailer</p>
          <img src="/svgs/play.svg" alt="Play" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default BannerMovie;
