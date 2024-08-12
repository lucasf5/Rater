import axios from "axios";
import Filters from "../@types/filters";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzNiZWQwOTEzMmZiZmU3ZWU0ODIxNzkyMTIwMGM3MCIsIm5iZiI6MTcyMzE0OTE2NS4xMTM2MTQsInN1YiI6IjY2YjUyNmY2ZjIyNjI1ZTE1MTllOTk2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2sRk9MSkQH3AeJ5Hl5eb8xHNJ2kCzrjbLXDdYPY5ed4",
  },
};

export const api = {
  search: async (query: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&language=pt-BR`,
      options
    );
    return response.data;
  },
  filter: async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR",
      options
    );
    return response.data;
  },
  discover: async (genre: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=pt-BR`,
      options
    );
    return response.data;
  },
  details: async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
      options
    );
    return response.data;
  },
  popularMovies: async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?language=pt-BR",
      options
    );
    return response.data;
  },
  popularPeople: async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/person/week?language=pt-BR",
      options
    );
    return response.data;
  },
  getGenres: async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=pt",
      options
    );
    return response.data;
  },
  getMovies: async (filters: Filters) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${filters.genres}&primary_release_date.gte=${filters.releaseDateFrom}&primary_release_date.lte=${filters.releaseDateTo}&language=pt-BR`,
      options
    );
    return response.data;
  },
  getDetailsPeople: async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?language=pt-BR`,
      options
    );
    return response.data;
  }
};
