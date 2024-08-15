import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  z-index: 999;
`;

const RegisterBox = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 40px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: 0.875rem;
  color: #ccc;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  text-align: left;
  font-size: 0.875rem;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  width: 100%;
  max-width: 330px;

  &::placeholder {
    color: #aaa;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TogglePassword = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
`;

const RegisterButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #444;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #555;
  }
`;

const SignUpText = styled.p`
  margin-top: 20px;
  font-size: 0.875rem;
`;

const SignUpLink = styled.a`
  color: #fff;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`;

export {
  ErrorText,
  Form,
  Input,
  Label,
  PasswordContainer,
  RegisterBox,
  RegisterButton,
  RegisterContainer,
  SignUpLink,
  SignUpText,
  Subtitle,
  Title,
  TogglePassword,
};
