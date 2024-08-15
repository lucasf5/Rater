import { useEffect, useRef } from "react";
import { Movie } from "../../../@types/movie";
import { api } from "../../../api";
import useStore from "../../../contexts/store";
import FilterSection from "./components/Filters";
import ListFilteredMovies from "./components/ListFilteredMovies";
import {
  Container,
  FilterContainer,
  FilterCounter,
  FilterIcon,
  FilterList,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles";

const Search = () => {
  const {
    selectedGenres,
    releaseDateFrom,
    releaseDateTo,
    search,
    setSearch,
    movies,
    setMovies,
    filterActived,
    setFilterActived,
  } = useStore();
  const filterListRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const filters = {
      genres: selectedGenres,
      releaseDateFrom,
      releaseDateTo,
    };

    if (selectedGenres.length > 0 || search.length > 2) {
      api.getMovies(filters).then((response) => {
        setMovies(response.results);
      });
    }
  }, [selectedGenres, releaseDateFrom, releaseDateTo, search, setMovies]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterListRef.current &&
        !filterListRef.current.contains(event.target as Node) &&
        !searchInputRef.current?.contains(event.target as Node)
      ) {
        setMovies([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterListRef, searchInputRef, setMovies]);

  useEffect(() => {
    if (search.length > 2 || selectedGenres.length > 0) {
      api.search(search).then((response) => {
        if (response.results) {
          const filteredMovies = response.results.filter((movie: Movie) => {
            const matchesGenre = selectedGenres.length
              ? selectedGenres.some((genre) => movie.genre_ids.includes(genre))
              : true;

            const matchesDate =
              (!releaseDateFrom ||
                new Date(movie.release_date) >= new Date(releaseDateFrom)) &&
              (!releaseDateTo ||
                new Date(movie.release_date) <= new Date(releaseDateTo));

            return matchesGenre && matchesDate;
          });

          setMovies(filteredMovies);
        }
      });
    }
  }, [search, selectedGenres, releaseDateFrom, releaseDateTo, setMovies]);

  return (
    <Container>
      <SearchContainer>
        <SearchIcon src="/svgs/search.svg" />
        <SearchInput
          placeholder="Pesquisar..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          ref={searchInputRef}
        />
      </SearchContainer>
      {movies.length > 0 && !filterActived && (
        <FilterList ref={filterListRef}>
          <>
            <p>Resultados</p>
            {movies.map((movie) => (
              <ListFilteredMovies
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                year={movie.release_date}
                actors={movie.overview}
                rating={movie.vote_average}
              />
            ))}
          </>
        </FilterList>
      )}
      {filterActived && (
        <FilterList>
          <FilterSection />
        </FilterList>
      )}
      <FilterContainer>
        {selectedGenres.length > 0 || releaseDateFrom || releaseDateTo ? (
          <FilterCounter>{selectedGenres.length}</FilterCounter>
        ) : null}
        <FilterIcon
          src="/svgs/menu.svg"
          onClick={() => setFilterActived(!filterActived)}
        />
      </FilterContainer>
    </Container>
  );
};

export default Search;
