import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../api";
import useStore from "../../contexts/store";
import {
  ButtonGroup,
  CloseButton,
  DeleteButton,
  ErrorText,
  Input,
  Label,
  ModalBox,
  ModalContainer,
  SaveButton,
  Section,
  Title,
} from "./styles";

const AccountPreferences: React.FC = () => {
  const { userLogged, setUserInfos, setUserLogged, setModalOpen, modalOpen } =
    useStore();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    fullname: "",
  });

  useEffect(() => {
    if (userLogged) {
      api.profile().then((response) => {
        setUsername(response.username);
        setFullname(response.fullname);
        setEmail(response.email);
      });
    }
  }, [userLogged]);

  const validateForm = () => {
    const newErrors = { username: "", fullname: "" };
    let valid = true;

    if (!username) {
      newErrors.username = "Nome de usuário é obrigatório.";
      valid = false;
    }

    if (!fullname) {
      newErrors.fullname = "Nome completo é obrigatório.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSaveChanges = () => {
    if (!validateForm()) return;

    api
      .updateProfile(fullname, username)
      .then((response) => {
        setUserInfos(response);
        toast.success("Dados atualizados com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao atualizar os dados.");
      });
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Tem certeza que deseja excluir sua conta? Essa ação é irreversível."
      )
    ) {
      api
        .deleteProfile()
        .then(() => {
          setUserLogged(false);
          toast.success("Conta excluída com sucesso.");
          setModalOpen(false);
        })
        .catch(() => {
          toast.error("Erro ao excluir a conta.");
        });
    }
  };

  return (
    modalOpen && (
      <ModalContainer>
        <ModalBox>
          <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
          <Title>Preferências da conta</Title>

          <Section>
            <Label>Nome de usuário</Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <ErrorText>{errors.username}</ErrorText>}
          </Section>

          <Section>
            <Label>Nome completo</Label>
            <Input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            {errors.fullname && <ErrorText>{errors.fullname}</ErrorText>}
          </Section>

          <Section>
            <Label>Email</Label>
            <Input type="email" value={email} readOnly />
          </Section>

          <Section>
            <Label>Encerramento da conta</Label>
            <DeleteButton onClick={handleDeleteAccount}>
              Deletar conta
            </DeleteButton>
          </Section>

          <ButtonGroup>
            <SaveButton onClick={handleSaveChanges}>
              Salvar alterações
            </SaveButton>
          </ButtonGroup>
        </ModalBox>
      </ModalContainer>
    )
  );
};

export default AccountPreferences;
