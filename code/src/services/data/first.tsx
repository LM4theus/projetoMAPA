// Toda base de dados referente a ambientes do Terreo.
import Default from "./model/default";
import { routeimagesFirst } from "./model/imports";

//Obs: o terreo possui tres escada de acesso ao primeiro andar.
// A ordem das escadas está de acordo com a proximidade da entrada principal

export const First: Default[] = [
  /*
  new Default(
    31,
    "Sala de operacoes",
    "Sala de Operações",
    routeimagesFirst.entradaD13,
    "1"
  ),
  */
  new Default(
    32,
    "A101",
    "Maquiagem e Terapia",
    routeimagesFirst.rampaA101,
    "1"
  ),
  new Default(
    33,
    "A102",
    "Estrutura e Função I",
    routeimagesFirst.rampaA102,
    "1"
  ),
  /*
  new Default(
    34,
    "Deposito Saude",
    "Depósito Saúde",
    routeimages.entradaD13,
    "1"
  ),
  new Default(
    35,
    "Sala dos Tecnicos",
    "Sala dos Técnicos",
    routeimages.entradaD13,
    "1"
  ),
  new Default(
    36,
    "Operacoes Academicas",
    "Operações Acadêmicas",
    routeimages.entradaD13,
    "1"
  ),
  */
  new Default(
    37,
    "A104",
    "Estrutura e Função II",
    routeimagesFirst.rampaA104,
    "1"
  ),
  new Default(
    38,
    "A106",
    "Treino de Habilidades",
    routeimagesFirst.rampaA106,
    "1"
  ),
  new Default(39, "A107", "Multidisciplinar", routeimagesFirst.rampaA107, "1"),
  new Default(40, "A108", "Auditório", routeimagesFirst.rampaA108, "1"),
  new Default(
    41,
    "A109",
    "Multidisciplinar II",
    routeimagesFirst.rampaA109,
    "1"
  ),
  new Default(42, "C103A", "Sala de Aula", routeimagesFirst.rampaC103A, "1"),
  new Default(43, "C103B", "Sala de Aula", routeimagesFirst.rampaC103B, "1"),
  new Default(44, "C104", "Sala de Aula", routeimagesFirst.rampaC104, "1"),
  new Default(45, "A110", "Laboratório", routeimagesFirst.rampaA110, "1"),
  new Default(46, "B101", "Sala de Aula", routeimagesFirst.escadaB101, "1"),
  new Default(47, "B102", "Sala de Aula", routeimagesFirst.escadaB102, "1"),
  new Default(
    48,
    "C102",
    "Atelier de Arquitetura",
    routeimagesFirst.rampaC102,
    "1"
  ),
  new Default(49, "D101A", "Sala de Aula", routeimagesFirst.escadaD101A, "1"),
  new Default(50, "D101B", "Sala de Aula", routeimagesFirst.escadaD101B, "1"),
  new Default(51, "D102", "Sala de Aula", routeimagesFirst.escadaD102, "1"),
  new Default(52, "D103", "Sala de Aula", routeimagesFirst.escadaD103, "1"),
  new Default(53, "D104", "Sala de Aula", routeimagesFirst.escadaD104, "1"),
  new Default(
    54,
    "B103",
    "Saúde e Bem Estar",
    routeimagesFirst.escadaB103,
    "1"
  ),
  new Default(
    55,
    "B104",
    "Saúde e Bem Estar",
    routeimagesFirst.escadaD104,
    "1"
  ),
  new Default(56, "D106", "Sala de Aula", routeimagesFirst.escadaD106, "1"),
  new Default(57, "D107", "Sala de Aula", routeimagesFirst.escadaD107, "1"),
  new Default(58, "D108", "Sala de Aula", routeimagesFirst.escadaD108, "1"),
  new Default(59, "D109", "Sala de Aula", routeimagesFirst.rampaA109, "1"),
  new Default(60, "D110", "Sala de Aula", routeimagesFirst.escadaD110, "1"),
  new Default(61, "D111", "Sala de Aula", routeimagesFirst.escadaD111, "1"),
  new Default(62, "D112", "Sala de Aula", routeimagesFirst.escadaD112, "1"),
  new Default(63, "D113", "Sala de Aula", routeimagesFirst.escadaD113, "1"),
  new Default(64, "D114", "Sala de Aula", routeimagesFirst.escadaD114, "1"),
  new Default(65, "D115", "Sala de Aula", routeimagesFirst.escadaD115, "1"),
  new Default(66, "D116", "Sala de Aula", routeimagesFirst.escadaD116, "1"),

  new Default(
    67,
    "Lab Comunicacao",
    "Laboratório de Comunicação",
    routeimagesFirst.Lab_Comunicacao,
    "1"
  ),
  new Default(
    68,
    "Lab Comunicacao 2",
    "Banheiro perto das escadas",
    routeimagesFirst.Lab_Comunicacao2,
    "1"
  ),
  /*
  new Default(
    69,
    "Segundo Banheiro",
    "Banheiro perto do Atelie de Arquitetura",
    routeimages.entradaD13,
    "1"
  ),
  new Default(
    70,
    "Primeira Escada",
    "Perto da Sala de Operações",
    routeimages.entradaD13,
    "1"
  ),
  new Default(
    71,
    "Segunda Escada",
    "Perto do corredor junta a A109",
    routeimages.entradaD13,
    "1"
  ),
  new Default(
    72,
    "Terceira Escada",
    "Perto da sala A107",
    routeimages.entradaD13,
    "1"
  ),
  new Default(
    73,
    "Quarta Escada",
    "Perto do Lab A110",
    routeimages.entradaD13,
    "1"
  ),
  new Default(
    74,
    "Quinta Escada",
    "Perto da D108 e D109",
    routeimages.entradaD13,
    "1"
  ),

  */
];
