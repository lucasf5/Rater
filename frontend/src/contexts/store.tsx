import { create } from "zustand";
import { Actor } from "../@types/actor";
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
  currentActor: Actor | null;
  setCurrentActor: (actor: Actor) => void;
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  isSidebarVisible: boolean;
  setSidebarVisible: (isVisible: boolean) => void;
  notificationMessage: string;
  setNotificationMessage: (message: string) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
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
  currentActor: null,
  setCurrentActor: (actor) => set({ currentActor: actor }),
  isModalOpen: false,
  setModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  isSidebarVisible: true,
  setSidebarVisible: (isVisible) => set({ isSidebarVisible: isVisible }),
  notificationMessage: "",
  setNotificationMessage: (message) => set({ notificationMessage: message }),
  loading: false,
  setLoading: (isLoading) => set({ loading: isLoading }),
}));

export default useStore;
