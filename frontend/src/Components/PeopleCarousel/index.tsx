import { useEffect } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../api";
import useStore from "../../contexts/store";
import PeopleMovie from "../CardPeople";
import TitleCards from "../Typography";

const PeopleCarousel = () => {
  const { people, setPeople } = useStore();

  useEffect(() => {
    api.popularPeople().then((response) => {
      setPeople(response.results);
    });
  }, [setPeople]);

  return (
    <MovieCarouselContainer>
      <TitleCards title="Celebridades" />
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
        {people.slice(4).map((person, index) => (
          <SwiperSlide key={index}>
            <PeopleMovie {...person} />
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

export default PeopleCarousel;
