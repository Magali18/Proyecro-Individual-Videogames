import Card from "../Card/Card";
import "./cards.style.css";

const Cards = ({allVideogames}) => {
  const videogamesList = allVideogames
  return (
    <div className="cards-container">
     {videogamesList?.map((game)=>(
      <Card key={game.id} game={game} />
     ))}
    </div>
  );
};
export default Cards;
