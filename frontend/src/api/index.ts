import Filters from "../@types/filters";

import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));

const options = {
  method: "GET",
  headers: {
    accept: "*/*",
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
  },
  getDetailsMovie: async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
      options
    );
    return response.data;
  },
  getSimilarMovies: async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=pt-BR`,
      options
    );
    return response.data;
  },
  getCast: async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`,
      options
    );
    return response.data;
  },
  getImages: async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?language=pt-BR`,
      options
    );
    return response.data;
  },
  getMoviesByActor: async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?language=pt-BR`,
      options
    );
    return response.data;
  },
  login: async (email: string, password: string) => {
    const response = await client.post(
      "http://localhost:3000/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  },
  register: async (email: string, password: string, fullname: string) => {
    const response = await client.post(
      "http://localhost:3000/register",
      { email, password, fullname },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  },
  profile: async () => {
    const response = await client.get("http://localhost:3000/profile", {
      withCredentials: true,
    });
    return response.data;
  },
  updateProfile: async (fullname: string, username: string) => {
    const response = await client.put(
      "http://localhost:3000/user",
      { fullname, username },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  },
  deleteProfile: async () => {
    const response = await axios.delete("http://localhost:3000/user", {
      withCredentials: true,
    });
    return response.data;
  },
  addMoviesToAccountUser: async (movieId: string) => {
    const response = await axios.post(
      "http://localhost:3000/addMovies",
      { movieId },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  },
};
