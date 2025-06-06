import Card from "../../components/layout/Card";
import Button from "../../components/ui/Button";
import Screen from "../../components/layout/screenbase";
import Header from "../../components/ui/Header";
import Input from "../../components/ui/Input";
import { Floor } from "../data/floor"; // ou todos os andares juntos se quiser
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Scan() {
  const location = useLocation();
  const qrCode = location.state?.qrCode?.toLowerCase();
  const navigate = useNavigate();

  const pavimentMap = {
    terreo: "T",
    primeiro: "1",
    segundo: "2",
  };

  const pavimentTarget = pavimentMap[qrCode];

  if (!pavimentTarget) {
    return alert(`QR Code ${qrCode} não reconhecido.`);
  }

  // Aqui usamos todos os ambientes (se quiser importar todos os andares)
  // ou apenas um conjunto específico, como só o térreo por agora
  const ambientes = Floor.filter((item) => item.pavement === pavimentTarget);

  return (
    <Screen>
      <section
        className="flex flex-col items-center justify-start mb-10 overflow-y-auto scroll-smooth px-2
  max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh] lg:max-h-[75vh]"
      >
        {ambientes.length === 0 ? (
          <p>Nenhum ambiente encontrado.</p>
        ) : (
          ambientes.map((ambiente) => (
            <Button
              key={ambiente.id}
              variant="other"
              className="mb-4 w-full max-w-md"
            >
              <Card
                variant="location_card"
                number={ambiente.pavement}
                description={ambiente.description}
              >
                {ambiente.name}
              </Card>
            </Button>
          ))
        )}
      </section>

      <footer>
        <div className="bg-[#FF9B21] h-24 flex items-center justify-center"></div>
      </footer>
    </Screen>
  );
}

export default Scan;
