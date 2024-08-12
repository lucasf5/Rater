import { useParams } from "react-router-dom";

const ActorDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Detalhes do Ator</h1>
      <p>ID do Ator: {id}</p>
      {/* Adicione mais lógica aqui para buscar e exibir os detalhes do filme */}
    </div>
  );
};

export default ActorDetails;
