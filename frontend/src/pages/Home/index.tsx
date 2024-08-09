import BannerMovie from "../../Components/BannerMovie";
import CardMovie from "../../Components/CardMovie";
import Header from "../../Components/Header";
import TitleCards from "../../Components/Typography";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <BannerMovie />
      <CardMovie />
      <TitleCards title="Em alta" /> 
    </Container>
  );
};

export default Home;
