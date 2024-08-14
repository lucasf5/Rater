import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Actor } from "../../@types/actor";
import { api } from "../../api";
import { Card, CardContent, CardTitle } from "./styles";

const PeopleMovie = (person: Actor) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/actor/${person.id}`);
  };
  const [details, setDetails] = useState({} as Actor);
  useEffect(() => {
    api.getDetailsPeople(person.id.toString()).then((response) => {
      setDetails(response);
    });
  }, [person.id]);

  const calculateAge = (birthday: string): number => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <Card
      src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
      onClick={handleClick}
    >
      <CardContent>
        <CardTitle>{person.name}</CardTitle>
        <div>{details?.birthday && `${calculateAge(details.birthday)}`}</div>
      </CardContent>
    </Card>
  );
};

export default PeopleMovie;
