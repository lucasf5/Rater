import Login from "./Login";
import Logo from "./Logo";
import Search from "./Search";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo />
      <Search />
      <Login />
    </Container>
  );
};

export default Header;
