// src/components/MovieList/styles.ts
import styled from "styled-components";

export const MovieListContainer = styled.div``;

export const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 16px;
  margin-top: 24px;
`;

export const MovieCard = styled.div`
  width: 310px;
  height: 94px;
  display: flex;
  gap: 8px;
  img {
    width: 64px;
    height: 86px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.accessibleText[11]};
  }
`;

export const Rating = styled.span`
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.75rem;
  img {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
`;

export const Pagination = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.separators[6]};
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
  gap: 24px;
  padding-top: 24px;

  button {
    color: ${({ theme }) => theme.colors.accessibleText[12]};
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }

  span {
    font-size: 1.2rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
