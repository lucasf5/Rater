import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { api } from "../../api";
import useStore from "../../contexts/store";
import {
  Form,
  Input,
  Label,
  LoginBox,
  LoginButton,
  LoginContainer,
  PasswordContainer,
  SignUpLink,
  SignUpText,
  Subtitle,
  Title,
  TogglePassword,
} from "./styled";

const LoginForm: React.FC = () => {
  const {
    setUserInfos,
    modalLoginOpen,
    setModalLoginOpen,
    setUserLogged,
    setModalRegisterOpen,
  } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await api
      .login(email, password)
      .then((response) => {
        setUserInfos(response);
        setModalLoginOpen(false);
        setUserLogged(true);
        toast.success("Login efetuado com sucesso!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalLoginOpen(false);
    }
  };

  return (
    modalLoginOpen && (
      <LoginContainer onClick={handleClickOutside}>
        <LoginBox>
          <Title>Acesse sua conta</Title>
          <Subtitle>Bem vindo de volta! Entre com seus dados.</Subtitle>
          <Form onSubmit={handleLogin}>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label>Senha</Label>
            <PasswordContainer>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TogglePassword
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </TogglePassword>
            </PasswordContainer>
            <LoginButton type="submit">Fazer login</LoginButton>
          </Form>
          <SignUpText>
            Não tem uma conta ainda?{" "}
            <SignUpLink
              onClick={() => {
                setModalLoginOpen(false);
                setModalRegisterOpen(true);
              }}
            >
              Criar conta
            </SignUpLink>
          </SignUpText>
        </LoginBox>
      </LoginContainer>
    )
  );
};

export default LoginForm;
