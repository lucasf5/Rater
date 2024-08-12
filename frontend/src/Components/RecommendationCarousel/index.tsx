import { Link } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useStore from "../../contexts/store";
import MovieCard from "../CardMovie";
import TitleCards from "../Typography";

const RecommendationCarousel = ({ isLoged }: { isLoged: boolean }) => {
  const { popularMovies } = useStore();

  return (
    <MovieCarouselContainer>
      <Container>
        <TitleCards title="Recomendados" />
        {!isLoged && (
          <p>
            Faça{" "}
            <Link hrefLang="/login" to="/login">
              login
            </Link>{" "}
            para ver mais filmes recomendados
          </p>
        )}
      </Container>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={12}
        navigation
        loop={true}
      >
        {popularMovies.slice(4).map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard {...movie} popular={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MovieCarouselContainer>
  );
};

const MovieCarouselContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  padding: 0 1rem;
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.accessibleText[12]};
  }

  .Card {
    width: 100px;
  }
`;

const Container = styled.div`
  display: flex;

  p {
    margin: 0;
    margin-top: 0.4rem;
    margin-left: 1rem;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.accessibleText[11]};
    display: block;

    a {
      color: ${({ theme }) => theme.colors.accessibleText[12]};
      text-decoration: underline;
    }
  }
`;

export default RecommendationCarousel;
