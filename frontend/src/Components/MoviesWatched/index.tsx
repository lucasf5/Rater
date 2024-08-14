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
        <Swiper modules={[Navigation]} slidesPerView={4} navigation loop>
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
  padding: 2rem;
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
`;

const SubMessage = styled.p`
  margin-top: 0.5rem;
  color: #aaa; /* Cor do texto secundário */
`;

const LoginButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  background-color: #333; /* Cor do botão */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555; /* Cor do botão ao passar o mouse */
  }
`;

export default MoviesWatched;
