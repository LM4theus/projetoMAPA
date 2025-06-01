import fpblogo from "./assets/FPB-icon.png";
import bg from "./assets/entradaPrincipal.png";

function App() {
  return (
    <main className="flex flex-col w-screen h-screen text-white text-center sm:text-left">
      <figure className="flex-1">
        <img src={bg} alt="" />
      </figure>

      <section className="flex flex-col h-72  justify-center">
        <header className=" flex items-center justify-center">
          <img src={fpblogo} alt="" />
        </header>

        <nav className="p-5">
          <button className="h-32 w-80 bg-[#00497D] rounded-3xl text-white text-4xl font-bold">
            MAPA
          </button>
        </nav>

        <footer>
          <a
            href="../about/index.html"
            className="text-gray-600"
            target="blank_"
          >
            Saiba mais
          </a>
        </footer>
      </section>
    </main>
  );
}

export default App;

// configs vite para liberar acesso local a   moveis
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // necessário para acesso externo
    port: 5173, // ou outro que quiser
  },
});
