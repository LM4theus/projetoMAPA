import Card from "../components/layout/Card";
import Screen from "../components/layout/screenbase";
import Button from "../components/ui/Button";
import Header from "../components/ui/Header";
import Input from "../components/ui/Input";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Scan from "../services/actions/scan";

function Search() {
  const use_location = useLocation();
  const qrCode = use_location.state?.qrCode;
  const navigate = useNavigate();

  return (
    <Screen>
      <section className="flex flex-col mb-6">
        <Header />
        <nav className="flex">
          <Button variant="back" onClick={() => navigate("/tutorial")}>
            voltar
          </Button>
          <h1 className="flex text-3xl ml-2 font-semibold text-[#00497D] text-nowrap ">
            Para onde quer ir?
          </h1>
        </nav>
        <Input id="location" />
      </section>
      {<Scan />}
      <section
        className="flex flex-col items-center justify-start mb-10 overflow-y-auto scroll-smooth px-2
  max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh] lg:max-h-[75vh]"
      >
        {["A110", "A111", "A112"].map((sala) => (
          <Button key={sala} variant="other" className="mb-4 w-full max-w-md">
            <Card
              variant="location_card"
              number="1"
              description="Laboratório de Informática"
            >
              {sala}
            </Card>
          </Button>
        ))}
      </section>

      <footer>
        <div className="bg-[#FF9B21] h-24 flex items-center justify-center"></div>
      </footer>
    </Screen>
  );
}
export default Search;
