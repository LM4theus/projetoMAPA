// Toda base de dados referente a ambientes do Terreo.
import Default from "./model/default";
import { routeimagesFloor } from "./model/imports";

//Obs: o terreo possui tres escada de acesso ao primeiro andar.
// A ordem das escadas está de acordo com a proximidade da entrada principal
export const Floor: Default[] = [
  new Default(
    0,
    "B01",
    "Laboratório de Informática",
    routeimagesFloor.entradaB01,
    "T"
  ),
  new Default(
    1,
    "B02",
    "Redes e Arquitetura",
    routeimagesFloor.entradaB02,
    "T"
  ),
  new Default(
    2,
    "B03",
    "Laboratório de Informática",
    routeimagesFloor.entradaB03,
    "T"
  ),
  new Default(
    3,
    "A02",
    "Laboratório de Informática",
    routeimagesFloor.entradaA02,
    "T"
  ),
  new Default(
    4,
    "Banheiro",
    "Banheiros do Terreo",
    routeimagesFloor.entradaA02, // Adiciona rota para banheiros
    "T"
  ),
  new Default(
    5,
    "Lab. Med Veterinária",
    "Laboratório Integrado de Medicina Veterinária",
    routeimagesFloor.entradaLabMed,
    "T"
  ),

  new Default(6, "C04B", "Sala de Aula", routeimagesFloor.entradaC04B, "T"),
  new Default(7, "C03A", "Sala de Aula", routeimagesFloor.entradaC03A, "T"),
  new Default(8, "C01A", "Sala de Aula", routeimagesFloor.entradaC01A, "T"),
  new Default(9, "C02", "Sala de Aula", routeimagesFloor.entradaC02, "T"),
  new Default(10, "C04B", "Sala de Aula", routeimagesFloor.entradaC04B, "T"),
  new Default(11, "D01", "Sala Bar", routeimagesFloor.entradaD01, "T"),
  new Default(12, "D02", "Preparo", routeimagesFloor.entradaD02, "T"),
  new Default(13, "D03", "Cozinha", routeimagesFloor.entradaD03, "T"),
  new Default(14, "D04", "Cozinha II", routeimagesFloor.entradaD04, "T"),

  new Default(
    15,
    "D05",
    "Laboratório de Construção Civíl",
    routeimagesFloor.entradaD05,
    "T"
  ),
  new Default(
    16,
    "D06",
    "Laboratório de Física",
    routeimagesFloor.entradaD06,
    "T"
  ),
  new Default(
    17,
    "D07",
    "Laboratório de Química",
    routeimagesFloor.entradaD07,
    "T"
  ),
  new Default(
    18,
    "Refeitorio",
    "Refeitório/Lanchonetes",
    routeimagesFloor.entradaEstacionamento, // Adicionar rota para Refeitorio
    "T"
  ),
  new Default(
    19,
    "D09",
    "Laboratório de Desenho",
    routeimagesFloor.entradaD09,
    "T"
  ),
  new Default(
    20,
    "estacionamento",
    "Círuclação de Veículos/ Estacionamento",
    routeimagesFloor.entradaEstacionamento,
    "T"
  ),
  new Default(21, "D09B", "Sala de Aula", routeimagesFloor.entradaD09B, "T"),
  new Default(
    22,
    "D10",
    "Laboratório de Conforto",
    routeimagesFloor.entradaD10,
    "T"
  ),
  new Default(23, "D11", "Multidisciplinar", routeimagesFloor.entradaD11, "T"),
  new Default(
    24,
    "Lab IoT e Conectividade",
    "Laboratório IOT e Conectividade",
    routeimagesFloor.entradaLabIot,
    "T"
  ),
  new Default(
    25,
    "D13",
    "Laboratório Pef.HUm",
    routeimagesFloor.entradaD13,
    "T"
  ),
  new Default(
    26,
    "Areas de Atend",
    "Áreas de Atendimento",
    routeimagesFloor.entradaEstacionamento, // Adicionar imagem rota para Areas de Atendimento
    "T"
  ),
  new Default(
    27,
    "Primeira Escada",
    "Escada perto da Entrada",
    routeimagesFloor.entradaD13, // Adicionar rotas para escadas
    "T"
  ),
  new Default(
    28,
    "Segunda Escada",
    "Escada perto dos banheiros", // Adicionar rotas para escadas
    routeimagesFloor.entradaD13,
    "T"
  ),
  new Default(
    29,
    "Terceira Escada ",
    "Escada perto das lanchonetes", // Adicionar rotas para escadas
    routeimagesFloor.entradaD13,
    "T"
  ),
  new Default(
    30,
    "Biblioteca",
    "Biblioteca Clarice Lispector",
    routeimagesFloor.entradaBiblioteca,
    "T"
  ),
];
