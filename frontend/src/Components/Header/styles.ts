import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 96px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
    gap: 10px;
  }

  @media (max-width: 480px) {
  }
`;

export { Container };
