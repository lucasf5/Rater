import { create } from "zustand";
import { Actor } from "../@types/actor";
import { BackdropsResponse } from "../@types/backdrop";
import Genres from "../@types/genres";
import { Movie } from "../@types/movie";

type Store = {
  selectedGenres: number[];
  setSelectedGenre: (id: number) => void;
  releaseDateFrom: string;
  setReleaseDateFrom: (date: string) => void;
  releaseDateTo: string;
  setReleaseDateTo: (date: string) => void;
  genres: Genres[];
  setGenres: (genres: Genres[]) => void;
  search: string;
  setSearch: (search: string) => void;
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  filterActived: boolean;
  setFilterActived: (value: boolean) => void;
  popularMovies: Movie[];
  setPopularMovies: (movies: Movie[]) => void;
  people: Actor[];
  setPeople: (people: Actor[]) => void;

  currentMovie: Movie | null;
  setCurrentMovie: (movie: Movie) => void;
  currentCast: Actor[];
  setCurrentCast: (actor: Actor[]) => void;
  similarMovies: Movie[];
  setSimilarMovies: (movies: Movie[]) => void;
  genresMovies: Genres[];
  setGenresMovies: (genres: Genres[]) => void;
  images: BackdropsResponse;
  setImages: (images: BackdropsResponse) => void;

  currentPerson: Actor | null;
  setCurrentPerson: (person: Actor) => void;

  loading: boolean;
  setLoading: (value: boolean) => void;

  moviesByActor: Movie[];
  setMoviesByActor: (movies: Movie[]) => void;

  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (items: number) => void;

  userLogged: boolean;
  setUserLogged: (value: boolean) => void;
};

const useStore = create<Store>((set) => ({
  selectedGenres: [],
  setSelectedGenre: (id) =>
    set((state) => ({
      selectedGenres: state.selectedGenres.includes(id)
        ? state.selectedGenres.filter((genre) => genre !== id)
        : [...state.selectedGenres, id],
    })),
  releaseDateFrom: "",
  setReleaseDateFrom: (date) => set({ releaseDateFrom: date }),
  releaseDateTo: "",
  setReleaseDateTo: (date) => set({ releaseDateTo: date }),
  genres: [],
  setGenres: (genres) => set({ genres }),
  search: "",
  setSearch: (search: string) => set({ search }),
  movies: [],
  setMovies: (movies: Movie[]) => set({ movies }),
  filterActived: false,
  setFilterActived: (value) => set({ filterActived: value }),
  popularMovies: [],
  setPopularMovies: (movies: Movie[]) => set({ popularMovies: movies }),
  people: [],
  setPeople: (people: Actor[]) => set({ people }),

  currentMovie: null,
  setCurrentMovie: (movie) => set({ currentMovie: movie }),
  similarMovies: [],
  setSimilarMovies: (movies) => set({ similarMovies: movies }),
  currentCast: [],
  setCurrentCast: (cast) => set({ currentCast: cast }),
  genresMovies: [],
  setGenresMovies: (genres) => set({ genresMovies: genres }),
  images: { backdrops: [] },
  setImages: (images) => set({ images }),

  currentPerson: null,
  setCurrentPerson: (person) => set({ currentPerson: person }),
  loading: false,
  setLoading: (value) => set({ loading: value }),

  moviesByActor: [],
  setMoviesByActor: (movies) => set({ moviesByActor: movies }),

  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  itemsPerPage: 4,
  setItemsPerPage: (items) => set({ itemsPerPage: items }),

  userLogged: false,
  setUserLogged: (value) => set({ userLogged: value }),
}));

export default useStore;
