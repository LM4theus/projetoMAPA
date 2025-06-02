// Toda base de dados referente a ambientes do Terreo.
import { Default } from "./model/default";
import { routeimages } from "./model/imports";

//Obs: o terreo possui tres escada de acesso ao primeiro andar.
// A ordem das escadas está de acordo com a proximidade da entrada principal
export const Floor: Default[] = [
  new Default(
    0,
    "B01",
    "Laboratório de Informática",
    routeimages.entradaD13,
    "T"
  ),
  new Default(1, "B02", "Redes e Arquitetura", routeimages.entradaD13, "T"),
  new Default(
    2,
    "B03",
    "Laboratório de Informática",
    routeimages.entradaD13,
    "T"
  ),
  new Default(
    3,
    "A02",
    "Laboratório de Informática",
    routeimages.entradaD13,
    "T"
  ),
  new Default(
    4,
    "Banheiro",
    "Banheiros do Terreo",
    routeimages.entradaD13,
    "T"
  ),
  new Default(
    5,
    "Lab. Medicina Veterinária",
    "Laboratório Integrado de Medicina Veterinária",
    routeimages.entradaD13,
    "T"
  ),

  new Default(6, "C04B", "Sala de Aula", routeimages.entradaD13, "T"),
  new Default(7, "C03A", "Sala de Aula", routeimages.entradaD13, "T"),
  new Default(8, "C01A", "Sala de Aula", routeimages.entradaD13, "T"),
  new Default(9, "C02", "Sala de Aula", routeimages.entradaD13, "T"),
  new Default(10, "C04B", "Sala de Aula", routeimages.entradaD13, "T"),
  new Default(11, "D01", "Sala Bar", routeimages.entradaD13, "T"),
  new Default(12, "D02", "Preparo", routeimages.entradaD13, "T"),
  new Default(13, "D03", "Cozinha", routeimages.entradaD13, "T"),
  new Default(14, "D04", "Cozinha II", routeimages.entradaD13, "T"),

  new Default(
    15,
    "D05",
    "Laboratório de Construção Civíl",
    routeimages.entradaD13,
    "T"
  ),
  new Default(16, "D06", "Laboratório de Física", routeimages.entradaD13, "T"),
  new Default(17, "D07", "Laboratório de Química", routeimages.entradaD13, "T"),
  new Default(
    18,
    "Refeitorio",
    "Refeitório/Lanchonetes",
    routeimages.entradaD13,
    "T"
  ),
  new Default(19, "D09", "Laboratório de Desenho", routeimages.entradaD13, "T"),
  new Default(
    20,
    "estacionamento",
    "Círuclação de Veículos/ Estacionamento",
    routeimages.entradaD13,
    "T"
  ),
  new Default(21, "D09B", "Sala de Aula", routeimages.entradaD13, "T"),
  new Default(
    22,
    "D10",
    "Laboratório de Conforto",
    routeimages.entradaD13,
    "T"
  ),
  new Default(23, "D11", "Multidisciplinar", routeimages.entradaD13, "T"),
  new Default(
    24,
    "Lab IoT e Conectividade",
    "Laboratório IOT e Conectividade",
    routeimages.entradaD13,
    "T"
  ),
  new Default(25, "D13", "Laboratório Pef.HUm", routeimages.entradaD13, "T"),
  new Default(
    26,
    "Areas de Atend",
    "Áreas de Atendimento",
    routeimages.entradaD13,
    "T"
  ),
  new Default(
    27,
    "Primeira Escada",
    "Escada perto da Entrada",
    routeimages.entradaD13,
    "T"
  ),
  new Default(
    28,
    "Segunda Escada",
    "Escada perto dos banheiros",
    routeimages.entradaD13,
    "T"
  ),
  new Default(
    29,
    "Terceira Escada ",
    "Escada perto das lanchonetes",
    routeimages.entradaD13,
    "T"
  ),
  new Default(
    30,
    "Biblioteca",
    "Biblioteca Clarice Lispector",
    routeimages.entradaD13,
    "T"
  ),
];
