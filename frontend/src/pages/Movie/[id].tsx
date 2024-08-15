import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Genres from "../../@types/genres";
import { api } from "../../api";
import CardMovie from "../../components/CardMovie";
import { StarIcon } from "../../components/CardMovie/styles";
import { GenreButton } from "../../components/Header/Search/components/Filters/styles";
import TitleCards from "../../components/Typography";
import useStore from "../../contexts/store";
import {
  CastCharacter,
  CastImage,
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
  Star,
  Subtitle,
  Title,
  VoteCount,
} from "./styles";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    currentMovie,
    setCurrentMovie,
    similarMovies,
    setSimilarMovies,
    currentCast,
    setCurrentCast,
    genresMovies,
    setGenresMovies,
  } = useStore();

  useEffect(() => {
    if (!id) return;
    api.getDetailsMovie(id).then((response) => {
      setCurrentMovie(response);
    });
    api.getSimilarMovies(id).then((response) => {
      setSimilarMovies(response.results);
    });
    api.getCast(id).then((response) => {
      setCurrentCast(response.cast);
    });
    api.getGenres().then((response) => {
      const genres = currentMovie?.genres.map((genre) =>
        response.genres.find((item: Genres) => item.id === genre.id)
      );

      setGenresMovies(genres as Genres[]);
    });
  }, [
    id,
    setCurrentMovie,
    setSimilarMovies,
    setCurrentCast,
    currentMovie,
    setGenresMovies,
  ]);

  return (
    <Container>
      <Header>
        <Poster
          src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`}
          alt={currentMovie?.title}
        />
        <MovieInfo>
          <GenreList>
            {genresMovies?.map((genre) => (
              <GenreButton key={genre?.id} active={false}>
                {genre?.name}
              </GenreButton>
            ))}
          </GenreList>
          <ContainerTitle>
            <Title>{currentMovie?.title}</Title>
            <Subtitle>
              <Star>
                <StarIcon src="/svgs/star.svg" />
                <span>{currentMovie?.vote_average.toFixed(1)}</span>
              </Star>

              <VoteCount>{` | ${currentMovie?.vote_count}`}</VoteCount>
            </Subtitle>
          </ContainerTitle>
          <Details>
            {currentMovie?.runtime} min •{" "}
            {currentMovie?.release_date &&
              new Date(currentMovie.release_date).getFullYear()}{" "}
            •{currentMovie?.adult ? " 18" : " Livre"}
          </Details>
          <Overview>{currentMovie?.overview}</Overview>
        </MovieInfo>
      </Header>
      <Section>
        <TitleCards title="Elenco principal" />
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={5}
          spaceBetween={12}
          navigation
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
        >
          {currentCast.map((cast) => (
            <SwiperSlide key={cast.id}>
              <Link href={`/actor/${cast.id}`}>
                <CastImage
                  src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt={cast.name}
                />
                <CastName>{cast.name}</CastName>
                <CastCharacter>{cast.character}</CastCharacter>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
      <Section>
        <TitleCards title="Semelhantes" />
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={68}
          navigation
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
        >
          {similarMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CardMovie {...movie} popular={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </Container>
  );
};

export default MovieDetails;
