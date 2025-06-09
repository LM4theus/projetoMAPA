import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Screen from "../components/layout/screenbase";
import Header from "../components/ui/Header";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/layout/Card";
import findRoute from "../services/actions/findroute";

type LocationType = {
  id: string;
  name: string;
  description: string;
  route: string;
  paviment: string; // pavimento/andar
};

function Search() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<LocationType[]>([]);
  const [recommendations, setRecommendations] = useState<LocationType[]>([]);

  const navigate = useNavigate();
  const location = useLocation();
  const qrCode = location.state?.qrCode;

  // Ao carregar a página, se qrCode existir, filtra as recomendações
  useEffect(() => {
    if (qrCode) {
      // Exemplo: qrCode pode ser '1' para 1º andar
      const recommendedLocations = findRoute("") // pega tudo
        .filter((loc) => loc.paviment === qrCode);
      setRecommendations(recommendedLocations);
    }
  }, [qrCode]);

  // Atualiza resultados da busca conforme o usuário digita
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      // Se apagar busca, mostra só recomendações
      setResults([]);
    } else {
      // Faz busca normal (pode ser em nome, descrição etc)
      const matches = findRoute(value);
      setResults(matches);
    }
  };

  const handleSelect = (location: LocationType) => {
    navigate(`/map/${location.id}`);
  };

  return (
    <Screen>
      <section className="flex flex-col mb-6">
        <Header />
        <nav className="flex">
          <Button variant="back" onClick={() => navigate("/tutorial")}>
            voltar
          </Button>
          <h1 className="flex text-3xl ml-2 font-semibold text-[#00497D] text-nowrap">
            Para onde quer ir?
          </h1>
        </nav>
        <Input id="location" value={query} onChange={handleInputChange} />
      </section>

      <section
        className="flex flex-col items-center justify-start mb-10 overflow-y-auto scroll-smooth px-2
        max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh] lg:max-h-[75vh]"
      >
        {/* Se não houver busca, mostrar recomendações do pavimento */}
        {query.trim() === "" && recommendations.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4 text-[#00497D]">
              Locais recomendados para o pavimento {qrCode}
            </h2>
            {recommendations.map((location) => (
              <Button
                key={location.id}
                variant="other"
                className="mb-4 w-full max-w-md"
                onClick={() => handleSelect(location)}
              >
                <Card
                  variant="location_card"
                  number={location.paviment}
                  description={location.description}
                >
                  {location.name}
                </Card>
              </Button>
            ))}
            <hr className="my-4 w-full max-w-md" />
          </>
        )}

        {/* Mostrar resultados da busca */}
        {results.map((location) => (
          <Button
            key={location.id}
            variant="other"
            className="mb-4 w-full max-w-md"
            onClick={() => handleSelect(location)}
          >
            <Card
              variant="location_card"
              number={location.paviment}
              description={location.description}
            >
              {location.name}
            </Card>
          </Button>
        ))}
      </section>

      <footer>
        <div className="bg-[#FF9B21] h-24 flex items-center justify-center"></div>
      </footer>
    </Screen>
  );
}

export default Search;
