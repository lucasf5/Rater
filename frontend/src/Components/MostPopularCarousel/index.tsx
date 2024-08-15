import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useStore from "../../contexts/store";
import MovieCard from "../CardMovie";
import TitleCards from "../Typography";

const MovieCarousel = () => {
  const { popularMovies } = useStore();

  return (
    <MovieCarouselContainer>
      <TitleCards title="Últimos lançamentos" />
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
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
  height: 400px;
  padding: 0 1rem;
  position: relative;

  .swiper-slide > div {
    height: 284px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.accessibleText[12]};
  }

  @media (max-width: 320px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (min-width: 769px) {
    padding: 0 2rem;
  }
`;

export default MovieCarousel;
