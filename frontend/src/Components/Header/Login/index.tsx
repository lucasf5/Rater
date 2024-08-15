import useStore from "../../../contexts/store";
import AccountPreferencesModal from "../../AccountPreferences";
import { Button } from "./styles";

const Login = () => {
  const { setModalLoginOpen, setModalOpen, userLogged } = useStore();

  const handleLogin = () => {
    if (userLogged) {
      setModalOpen(true);
    } else {
      setModalLoginOpen(true);
    }
  };

  return (
    <>
      <Button onClick={handleLogin}>
        {userLogged ? "Minha conta" : "Entrar"}
      </Button>
      <AccountPreferencesModal />
    </>
  );
};

export default Login;
