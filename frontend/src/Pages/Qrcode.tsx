import Screen from "../components/layout/screenbase";
import Button from "../components/ui/Button";
import Header from "../components/ui/Header";

import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader, Result } from "@zxing/library";

function QRcode() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const [scannerData, setScannerData] = useState<string>("");
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    codeReaderRef.current = new BrowserMultiFormatReader();

    codeReaderRef.current
      .listVideoInputDevices()
      .then((videoInputDevices) => {
        if (videoInputDevices.length === 0) {
          setCameraError("Nenhuma câmera foi encontrada no dispositivo.");
          return;
        }

        // Tenta pegar câmera traseira (back)
        const backCamera = videoInputDevices.find((device) =>
          device.label.toLowerCase().includes("back")
        );
        const selectedDeviceId =
          backCamera?.deviceId || videoInputDevices[0].deviceId;

        if (!videoRef.current) {
          setCameraError("Elemento de vídeo não encontrado.");
          return;
        }

        codeReaderRef.current
          ?.decodeFromVideoDevice(
            selectedDeviceId,
            videoRef.current,
            (result: Result | undefined, error) => {
              if (result) {
                setScannerData(result.getText());
                // Parar o scanner após leitura
                codeReaderRef.current?.reset();
              }
              // Pode ignorar erros de leitura (ex: NotFoundException)
            }
          )
          .catch((err) => {
            console.error("Erro ao iniciar scanner:", err);
            setCameraError(
              "Erro ao acessar a câmera. Verifique permissões ou tente novamente."
            );
          });
      })
      .catch((err) => {
        console.error("Erro ao listar câmeras:", err);
        setCameraError(
          "Erro ao detectar as câmeras. Verifique seu dispositivo."
        );
      });

    return () => {
      codeReaderRef.current?.reset();
    };
  }, []);

  return (
    <Screen>
      <section className="flex flex-col">
        <Header />
        <nav className="flex">
          <Button variant="back">voltar</Button>
          <h1 className="flex text-4xl ml-16 font-semibold text-[#00497D]">
            QRCode
          </h1>
        </nav>
      </section>

      <section className="mt-6 bg-slate-300 flex flex-col items-center justify-center h-full mb-10">
        <div
          className="w-60 h-60 bg-white flex items-center justify-center"
          style={{ position: "relative" }}
        >
          {cameraError ? (
            <p className="text-red-500 p-4 text-center text-2xl">
              {cameraError}
            </p>
          ) : !scannerData ? (
            <p className="text-gray-500 text-sm text-center absolute">
              Aguardando leitura...
            </p>
          ) : null}
          {/* vídeo para a câmera */}
          <video
            ref={videoRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 4,
            }}
            muted
            playsInline
          />
        </div>

        {scannerData && (
          <p className="text-white mt-4 text-center">
            Código Lido: {scannerData}
          </p>
        )}
      </section>

      <footer>
        <div className="bg-[#FF9B21] h-24 flex items-center justify-center"></div>
      </footer>
    </Screen>
  );
}

export default QRcode;
