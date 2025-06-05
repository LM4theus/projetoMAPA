import Card from "../components/layout/Card";
import Screen from "../components/layout/screenbase";
import Button from "../components/ui/Button";
import Header from "../components/ui/Header";
import { useNavigate } from "react-router-dom";

function Tutorial() {
  const navigate = useNavigate();
  return (
    <Screen>
      <section className="flex flex-col">
        <Header />
        <nav className="flex">
          <Button variant="back" onClick={() => navigate("/")}>
            voltar
          </Button>
          <h1 className="flex text-4xl ml-16 font-semibold text-[#00497D] ">
            Tutorial
          </h1>
        </nav>
      </section>

      <section className="flex flex-col items-center justify-center mb-10">
        <Card number="1" variant="tutorial">
          Leia o QRCode apresentado
        </Card>
        <Card number="2" variant="tutorial">
          Escolha o local que deseja ir
        </Card>
        <Card number="3" variant="tutorial">
          Siga o caminho indicado!
        </Card>
      </section>
      <footer>
        <div className="bg-[#FF9B21] h-24 flex items-center justify-center">
          <Button className="mb-20" onClick={() => navigate("/qrcode")}>
            Iniciar
          </Button>
        </div>
      </footer>
    </Screen>
  );
}
export default Tutorial;
