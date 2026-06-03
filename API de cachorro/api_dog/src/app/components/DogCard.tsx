interface Breed {
  id: string;
  attributes: {
    name: string;
    description: string;
    hypoallergenic: boolean;
  };
}

interface DogCardProps {
  dog: Breed;
}

export default function DogCard({ dog }: DogCardProps) {
  return (
    <div className="card">
      <h2>{dog.attributes.name}</h2>

      <p>{dog.attributes.description}</p>

      <span
        className={
          dog.attributes.hypoallergenic
            ? "badge-positive"
            : "badge-negative"
        }
      >
        {dog.attributes.hypoallergenic
          ? "Hipoalergênico"
          : "Não Hipoalergênico"}
      </span>
    </div>
  );
}