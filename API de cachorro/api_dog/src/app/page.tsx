'use client'
import { useEffect, useState } from "react";
import { buscarRacas } from "./services/dogApi";
import DogCard from "./components/DogCard";

interface Breed {
  id: string;
  attributes: {
    name: string;
    description: string;
    hypoallergenic: boolean;
  };
}

export default function Home() {
  const [dogs, setDogs] = useState<Breed[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    async function carregar() {
      const dados = await buscarRacas();
      setDogs(dados);
    }

    carregar();
  }, []);

  const dogsFiltrados = dogs.filter((dog) =>
    dog.attributes.name
      .toLowerCase()
      .includes(pesquisa.toLowerCase())
  );

  return (
    <main className="container">
      <h1 className="title">Dog API</h1>

      <div className="search-container">
  <span className="search-icon"></span>

  <input
    type="text"
    placeholder="Pesquisa a raça ai"
    value={pesquisa}
    onChange={(e) => setPesquisa(e.target.value)}
    className="search"
  />
</div>

      <div className="grid">
        {dogsFiltrados.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </main>
  );
}