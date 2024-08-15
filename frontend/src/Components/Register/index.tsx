import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../api";
import useStore from "../../contexts/store";
import {
  ErrorText,
  Form,
  Input,
  Label,
  RegisterBox,
  RegisterButton,
  RegisterContainer,
  Subtitle,
  Title,
} from "./styles";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullname: "",
  });
  const {
    setUserInfos,
    setUserLogged,
    setModalRegisterOpen,
    modalRegisterOpen,
  } = useStore();

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      fullname: "",
    };

    if (!fullname) {
      newErrors.fullname = "Nome completo é obrigatório.";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Email é obrigatório.";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Senha é obrigatória.";
      valid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    api.register(email, password, fullname).then((response) => {
      setUserInfos(response);
      setUserLogged(true);
      setModalRegisterOpen(false);
      toast.success("Registro realizado com sucesso!");
    });
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setModalRegisterOpen(false);
    }
  };

  return (
    modalRegisterOpen && (
      <RegisterContainer onClick={handleCloseModal}>
        <RegisterBox>
          <Title>Crie sua conta</Title>
          <Subtitle>Insira seus dados para se registrar.</Subtitle>
          <Form onSubmit={handleRegister}>
            <Label>Nome Completo</Label>
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              value={fullname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFullname(e.target.value)
              }
            />
            {errors.fullname && <ErrorText>{errors.fullname}</ErrorText>}
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            <Label>Senha</Label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
            <Label>Confirme a Senha</Label>
            <Input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword}</ErrorText>
            )}
            <RegisterButton type="submit">Registrar</RegisterButton>
          </Form>
        </RegisterBox>
      </RegisterContainer>
    )
  );
};

export default Register;
