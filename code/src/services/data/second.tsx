// Toda base de dados referente a ambientes do Terreo.
import Default from "./model/default";
import { routeimagesSecond } from "./model/imports";

//Obs: o terreo possui tres escada de acesso ao primeiro andar.
// A ordem das escadas está de acordo com a proximidade da entrada principal
export const Second: Default[] = [
  new Default(75, "C201", "Sala de Aula", routeimagesSecond.rampaB201, "2"),
  new Default(76, "C202", "Sala de Aula", routeimagesSecond.rampaB202, "2"),
  new Default(77, "C203", "Sala de Aula", routeimagesSecond.rampaB203, "2"),
  new Default(78, "C204", "Sala de Aula", routeimagesSecond.rampaB204, "2"),

  new Default(79, "B201", "Sala de Aula", routeimagesSecond.rampaC201, "2"),
  new Default(80, "B202", "Sala de Aula", routeimagesSecond.rampaC202, "2"),
  new Default(81, "D203", "Sala de Aula", routeimagesSecond.rampaC203, "2"),
  new Default(82, "D204", "Sala de Aula", routeimagesSecond.rampaC204, "2"),
  new Default(83, "D205", "Sala de Aula", routeimagesSecond.rampaD201B, "2"),
  new Default(84, "D206", "Sala de Aula", routeimagesSecond.rampaD202, "2"),
  new Default(85, "D207", "Sala de Aula", routeimagesSecond.rampaD203, "2"),
  new Default(86, "D208", "Sala de Aula", routeimagesSecond.rampaD204, "2"),
  new Default(87, "D210", "Sala de Aula", routeimagesSecond.rampaD205, "2"),
  new Default(88, "D211", "Sala de Aula", routeimagesSecond.rampaD206, "2"),
  new Default(89, "D212", "Sala de Aula", routeimagesSecond.rampaD207, "2"),
  new Default(90, "D213", "Sala de Aula", routeimagesSecond.rampaD208, "2"),
  new Default(91, "D214", "Sala de Aula", routeimagesSecond.rampaD210, "2"),
  new Default(92, "D215", "Sala de Aula", routeimagesSecond.rampaD211, "2"),
  new Default(93, "D216", "Sala de Aula", routeimagesSecond.rampaD212, "2"),
  new Default(94, "D217", "Sala de Aula", routeimagesSecond.rampaD213, "2"),
  new Default(94, "D217", "Sala de Aula", routeimagesSecond.rampaD214, "2"),
  new Default(94, "D217", "Sala de Aula", routeimagesSecond.rampaD215, "2"),
  new Default(94, "D217", "Sala de Aula", routeimagesSecond.rampaD216, "2"),
  new Default(94, "D217", "Sala de Aula", routeimagesSecond.rampaD217, "2"),
  new Default(94, "D217", "Sala de Aula", routeimagesSecond.rampaD218, "2"),
];

/*new Default(
    95,
    "PrimeiroBanheiro",
    "Banheiro perto de escadas",
    routeimagesSecond.entradaD13,
    "2"
  ),
  new Default(
    96,
    "SegundoBanheiro",
    "Banheiro ao Lado da sala c202",
    routeimagesSecond.entradaD13,
    "2"
  ),
  new Default(
    97,
    "PrimeiraEscada",
    "Escada perto de sala C204",
    routeimagesSecond.entradaD13,
    "2"
  ),
];
*/
