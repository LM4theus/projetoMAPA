import { useRef, useState } from "react";
import Screen from "../components/layout/screenbase";
import Button from "../components/ui/Button";
import Header from "../components/ui/Header";
import objects from "../services/data/objects";
import { useNavigate, useParams } from "react-router-dom";

function Map() {
  const { id } = useParams<{ id?: string }>(); // id pode ser undefined
  const navigate = useNavigate();

  // Define o tipo correto do ref para o container (div)
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [dragging, setDragging] = useState<boolean>(false);
  const [startDrag, setStartDrag] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Tipo de lastTouchDistance deve ser number ou null
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(
    null
  );

  // Se id não existir, evita parseInt com undefined
  const destination = id
    ? objects.find((obj) => obj.id === parseInt(id, 10))
    : undefined;

  const clampScale = (value: number) => Math.max(0.5, Math.min(value, 5));

  if (!destination) {
    return (
      <Screen>
        <Header />
        <p className="text-center text-red-500 mt-10">Rota não encontrada.</p>
        <div className="flex justify-center mt-4">
          <Button variant="back" onClick={() => navigate("/busca")}>
            Voltar
          </Button>
        </div>
      </Screen>
    );
  }

  // Funções com tipos para o evento

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    const newScale =
      e.deltaY < 0 ? scale + zoomIntensity : scale - zoomIntensity;
    setScale(clampScale(newScale));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
    setStartDrag({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      setPosition({ x: e.clientX - startDrag.x, y: e.clientY - startDrag.y });
    }
  };

  const handleMouseUp = () => setDragging(false);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      setDragging(true);
      setStartDrag({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    } else if (e.touches.length === 2) {
      const dist = getTouchDistance(e.touches);
      setLastTouchDistance(dist);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1 && dragging) {
      setPosition({
        x: e.touches[0].clientX - startDrag.x,
        y: e.touches[0].clientY - startDrag.y,
      });
    } else if (e.touches.length === 2) {
      const dist = getTouchDistance(e.touches);
      if (lastTouchDistance !== null) {
        const delta = dist - lastTouchDistance;
        const zoomIntensity = 0.005;
        const newScale = scale + delta * zoomIntensity;
        setScale(clampScale(newScale));
      }
      setLastTouchDistance(dist);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    setLastTouchDistance(null);
  };

  // Definindo o tipo para TouchList
  const getTouchDistance = (touches: React.TouchList): number => {
    const [touch1, touch2] = [touches[0], touches[1]];
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <Screen>
      <section className="flex flex-col">
        <Header />
        <nav className="flex">
          <Button variant="back" onClick={() => navigate("/tutorial")}>
            voltar
          </Button>
          <h1 className="flex text-4xl ml-20 font-semibold text-[#00497D] ">
            Mapa
          </h1>
        </nav>
      </section>

      <section className="flex flex-col items-center justify-center h-full w-full">
        <div
          ref={containerRef}
          className="relative overflow-hidden w-full h-full touch-none"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={destination?.route}
            alt={`Imagem do Mapa: ${destination.name}`}
            className="absolute"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: "top left",
              transition: dragging ? "none" : "transform 0.1s ease-out",
            }}
          />
        </div>
      </section>
    </Screen>
  );
}

export default Map;
