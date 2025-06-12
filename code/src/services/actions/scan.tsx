import Card from "../../components/layout/Card";
import Button from "../../components/ui/Button";
import Screen from "../../components/layout/screenbase";
import objects from "../data/objects"; // ou todos os andares juntos se quiser
import { useLocation } from "react-router-dom";

function Scan() {
  const location = useLocation();
  const qrCodeRaw = location.state?.qrCode;

  if (typeof qrCodeRaw !== "string") {
    alert("QR Code não fornecido ou inválido.");
    return null; // Ou um fallback UI
  }

  const qrCode = qrCodeRaw.toLowerCase();

  const pavimentMap = {
    terreo: "T",
    primeiro: "1",
    segundo: "2",
  } as const; // 'as const' define as chaves como literais e valores como constantes

  // Verifica se qrCode é uma chave válida de pavimentMap
  if (!(qrCode in pavimentMap)) {
    alert(`QR Code ${qrCode} não reconhecido.`);
    return null;
  }

  // Agora o TypeScript sabe que qrCode é uma chave válida
  const pavimentTarget = pavimentMap[qrCode as keyof typeof pavimentMap];

  // Filtra ambientes baseado no pavimento
  const ambientes = objects.filter((item) => item.paviment === pavimentTarget);

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
                number={ambiente.paviment}
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
