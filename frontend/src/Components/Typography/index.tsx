import { Container, SpanTitle, Title } from "./styles";

const TitleCards = ({ title }: { title: string }) => {
  return (
    <Container>
      <SpanTitle />
      <Title>{title}</Title>
    </Container>
  );
};

export default TitleCards;
