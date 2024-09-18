import DessertCard from "../components/DessertCard";
import { DessertCardProp } from "../components/DessertCard";

const Home = () => {
  let lista: DessertCardProp[] = [
    { name: "Almáspite", category: "Pie", price: 6.5 },
  ];

  return (
    <div>
      <section>
        <h1>Desserts</h1>
        <div className="cards-grid">
          {lista.map((suti) => (
            <DessertCard {...suti} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
