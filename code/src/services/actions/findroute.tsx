import objects from "../data/objects";

// Função utilitária para normalizar strings
function normalize(str: string) {
  return str
    .normalize("NFD") // separa acentos das letras
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .toLowerCase()
    .trim();
}

function findRoute(query: string) {
  if (!query) return [];

  const normalizedQuery = normalize(query);

  return objects.filter(({ name, description }) => {
    const normalizedName = normalize(name);
    const normalizedDesc = normalize(description);

    return (
      normalizedName.includes(normalizedQuery) ||
      normalizedDesc.includes(normalizedQuery)
    );
  });
}

export default findRoute;
