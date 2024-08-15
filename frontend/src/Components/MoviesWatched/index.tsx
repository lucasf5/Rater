import { FaFilm } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import TitleCards from "../Typography";

const MoviesWatched = () => {
  const hasMovies = false;
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <MovieCarouselContainer>
      <TitleCards title="Filmes assistidos" />
      {hasMovies ? (
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={12}
          navigation
          loop
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
          {/* Conteúdo do carrossel de filmes */}
        </Swiper>
      ) : (
        <EmptyState>
          <FaFilm size={48} />
          <Message>Ops, nenhum filme avaliado ainda.</Message>
          <SubMessage>Que tal adicionar um?</SubMessage>
          <LoginButton onClick={handleLogin}>Fazer login</LoginButton>
        </EmptyState>
      )}
    </MovieCarouselContainer>
  );
};

const MovieCarouselContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.background[1]}; /* Ajuste a cor de fundo conforme o tema */
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: ${({ theme }) =>
    theme.colors.accessibleText[11]}; /* Ajuste a cor conforme o tema */
`;

const SubMessage = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) =>
    theme.colors.accessibleText[12]}; /* Ajuste a cor conforme o tema */
`;

const LoginButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) =>
    theme.colors.solid[10]}; /* Ajuste a cor conforme o tema */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors
        .solid[9]}; /* Ajuste a cor ao passar o mouse conforme o tema */
  }
`;

export default MoviesWatched;
