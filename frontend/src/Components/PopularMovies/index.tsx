import { useEffect } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../api";
import useStore from "../../contexts/store";
import BannerMovie from "../BannerMovie";
import CardMovie from "../CardMovie";
import TitleCards from "../Typography";

const PopularMovies = () => {
  const { popularMovies, setPopularMovies } = useStore();

  useEffect(() => {
    api.popularMovies().then((response) => {
      setPopularMovies(response.results);
    });
  }, [setPopularMovies]);

  return (
    <Container>
      <BannerMovie {...popularMovies[0]} />
      <ContainerMostPopular>
        <TitleCards title="Destaques também" />
        <SwiperWrapper>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={8}
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
            }}
          >
            {popularMovies.slice(1, 4).map((movie) => (
              <SwiperSlide key={movie.id}>
                <CardMovie {...movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
        <StaticWrapper>
          {popularMovies.slice(1, 4).map((movie) => (
            <StaticCardWrapper key={movie.id}>
              <CardMovie {...movie} />
            </StaticCardWrapper>
          ))}
        </StaticWrapper>
      </ContainerMostPopular>
    </Container>
  );
};

const Container = styled.div`
  margin: 1rem auto;
  width: 100%;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerMostPopular = styled.div``;

const SwiperWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;

    .swiper-slide > div {
      display: flex;
      justify-content: center;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: ${({ theme }) => theme.colors.accessibleText[12]};
    }
  }
`;

const StaticWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StaticCardWrapper = styled.div`
  flex: 1;
  margin: 0 0.5rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default PopularMovies;
