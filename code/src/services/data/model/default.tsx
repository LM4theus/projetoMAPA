// Classe padrão para os objetos contendo os dados dos ambientes.

class Default {
  id: number;
  name: string;
  description: string;
  image_route: string;
  pavement: string;

  constructor(
    id: number,
    name: string,
    description: string,
    image_route: string,
    pavement: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image_route = image_route;
    this.pavement = pavement;
  }
}

export default Default;
