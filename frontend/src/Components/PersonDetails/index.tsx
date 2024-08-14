import { useEffect } from "react";
import styled from "styled-components";
import { api } from "../../api";
import useStore from "../../contexts/store";

const PersonDetails = ({ personId }: { personId: string }) => {
  const { currentPerson, setCurrentPerson, setLoading, loading } = useStore();

  useEffect(() => {
    const fetchPersonDetails = async () => {
      setLoading(true);
      try {
        const data = await api.getDetailsPeople(personId);
        setCurrentPerson(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes da pessoa:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonDetails();
  }, [personId, setCurrentPerson, setLoading]);

  if (loading || !currentPerson) {
    return <p>Carregando...</p>;
  }

  return (
    <PersonContainer>
      <PersonImage>
        <img
          src={`https://image.tmdb.org/t/p/original${currentPerson.profile_path}`}
          alt={currentPerson.name}
        />
      </PersonImage>
      <PersonInfo>
        <h2>{currentPerson.name}</h2>
        <p>
          <strong>Nascido(a) em:</strong>{" "}
          <p>{new Date(currentPerson.birthday).toLocaleDateString()}</p>
        </p>
        {currentPerson.place_of_birth && (
          <p>
            <strong>Origem:</strong>
            <p>{currentPerson.place_of_birth}</p>
          </p>
        )}
        {currentPerson.biography && (
          <p>
            <strong>Sobre:</strong> <p>{currentPerson.biography}</p>
          </p>
        )}
      </PersonInfo>
    </PersonContainer>
  );
};

export default PersonDetails;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
`;

const PersonImage = styled.div`
  img {
    border-radius: 10px;
    width: 400px;
    height: 350px;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.colors.separators[6]};
  }
`;

const PersonInfo = styled.div`
  text-align: left;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
    strong {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.accessibleText[12]};
    }

    p {
      color: ${({ theme }) => theme.colors.accessibleText[11]};
    }
  }
`;
