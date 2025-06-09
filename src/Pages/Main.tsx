import Screen from "../components/layout/screenbase";
import bg from "../assets/entradaPrincipal.png";
import fpblogo from "../assets/FPB-icon.png";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <Screen>
      <figure className="flex flex-1 w-full h-2/3 mb-2 items-center">
        <img src={bg} alt="Foto-Entrada-Principal" className="w-full h-full" />
      </figure>

      <section className="flex flex-col h-72 items-center justify-center">
        <header className=" flex">
          <img src={fpblogo} alt="" />
        </header>

        <nav className="p-2">
          <Button className="" onClick={() => navigate("/tutorial")}>
            MAPA
          </Button>
        </nav>
        <footer className="flex text-gray-600 p-2">
          <a href="../about/index.html" className="" target="blank_">
            Saiba mais
          </a>
        </footer>
      </section>
    </Screen>
  );
}

export default Main;
