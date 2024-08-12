import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 12px;
`;

const ContainerMostPopular = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  max-height: 861px;
`;

const ContainerRatings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export { Container, ContainerMostPopular, ContainerRatings };
