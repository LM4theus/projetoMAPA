import React, { useRef, useState } from "react";
import Screen from "../components/layout/screenbase";
import Button from "../components/ui/Button";
import Header from "../components/ui/Header";
import mapbg from "../../../backend/assets/fullmap/Terreo.png";

// Após o usuário escolher um destino
// O respectivo mapa com a rota é renderizado.
function Map() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = useState(null);

  const clampScale = (value) => Math.max(0.5, Math.min(value, 5));

  // Zoom com scroll (desktop)
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    const newScale =
      e.deltaY < 0 ? scale + zoomIntensity : scale - zoomIntensity;
    setScale(clampScale(newScale));
  };

  // Arrasto (desktop)
  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartDrag({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({ x: e.clientX - startDrag.x, y: e.clientY - startDrag.y });
    }
  };

  const handleMouseUp = () => setDragging(false);

  // Eventos Mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      // Arrasto
      setDragging(true);
      setStartDrag({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    } else if (e.touches.length === 2) {
      // Zoom com dois dedos
      const dist = getTouchDistance(e.touches);
      setLastTouchDistance(dist);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && dragging) {
      // Pan com um dedo
      setPosition({
        x: e.touches[0].clientX - startDrag.x,
        y: e.touches[0].clientY - startDrag.y,
      });
    } else if (e.touches.length === 2) {
      // Pinça (zoom)
      const dist = getTouchDistance(e.touches);
      if (lastTouchDistance) {
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

  // Distância entre dois toques
  const getTouchDistance = (touches) => {
    const [touch1, touch2] = touches;
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <Screen>
      <section className="flex flex-col">
        <Header />
        <nav className="flex">
          <Button variant="back">voltar</Button>
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
            src={mapbg}
            alt="Imagem-do-mapa"
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
