import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>© 2024 Rader. All rights reserved</FooterContainer>;
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accessibleText[11]};
  padding: 1.5rem;
`;

export default Footer;
