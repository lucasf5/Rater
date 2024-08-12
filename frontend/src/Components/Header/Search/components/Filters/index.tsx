import {
  DateFilterContainer,
  DateInput,
  FilterContainer,
  GenreButton,
  GenreList,
  Title,
} from "./styles";

import { useEffect } from "react";
import { api } from "../../../../../api";
import useStore from "../../../../../contexts/store";

const FilterSection = () => {
  const {
    selectedGenres,
    setSelectedGenre,
    releaseDateFrom,
    setReleaseDateFrom,
    releaseDateTo,
    setReleaseDateTo,
    genres,
    setGenres,
  } = useStore();

  useEffect(() => {
    api.getGenres().then((response) => {
      setGenres(response.genres);
    });
  }, [selectedGenres, setGenres]);

  return (
    <FilterContainer>
      <Title>Gêneros cinematográficos</Title>
      <GenreList>
        {genres.map((genre) => (
          <GenreButton
            key={genre.id}
            active={selectedGenres.includes(genre.id)}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </GenreButton>
        ))}
      </GenreList>

      <Title>Data de lançamento</Title>
      <DateFilterContainer>
        <DateInput
          type="date"
          value={releaseDateFrom}
          onChange={(e) => setReleaseDateFrom(e.target.value)}
          placeholder="00/00/0000"
        />
        <span>a</span>
        <DateInput
          type="date"
          value={releaseDateTo}
          onChange={(e) => setReleaseDateTo(e.target.value)}
          placeholder="00/00/0000"
        />
      </DateFilterContainer>
    </FilterContainer>
  );
};

export default FilterSection;
