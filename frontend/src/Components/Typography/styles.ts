import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SpanTitle = styled.span`
  font-size: 24px;
  font-weight: semibold;
  background-color: #f5f5f5;
  width: 4px;
  height: 29px;
  border-radius: 2px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: semibold;
`;

export { Container, SpanTitle, Title };
