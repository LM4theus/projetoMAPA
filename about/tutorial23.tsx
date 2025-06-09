import fpblogo from "../assets/FPB-icon.png";
import arrowlogo from "../assets/arrow-icon.png";

function Tutorial() {
  return (
    <main className="flex flex-col w-screen items-center h-screen text-white text-center sm:text-left">
      <header className="p-5">
        <figure className="flex justify-center">
          <img src={fpblogo} alt="" />
        </figure>
        <nav className="flex w-screen h-16 items-center font-bold text-[#00497D] ">
          <button className="ml-1 w-11 h-11">
            <img src={arrowlogo} alt="" />
          </button>
          <h1 className="ml-20 text-4xl">Tutorial</h1>
        </nav>
      </header>
      <section className="mb-4">
        <div className="flex mt-2 w-[341px] h-[131px] bg-[#D9D9D9] items-center rounded-3xl">
          <div className="ml-4 flex w-[86px] h-[86px] bg-[#00497D] text-6xl text-center items-center justify-center rounded-2xl font-bold">
            1°
          </div>
          <h6 className="text-black ml-1">Leia o QRCode apresentado</h6>
        </div>
        <div className="flex mt-2 w-[341px] h-[131px] bg-[#D9D9D9] items-center rounded-3xl">
          <div className="ml-4 flex w-[86px] h-[86px] bg-[#00497D] text-6xl text-center items-center justify-center rounded-2xl font-bold">
            2°
          </div>
          <h6 className="text-black ml-1">Escolha o local que deseja ir</h6>
        </div>
        <div className="flex mt-2 w-[341px] h-[131px] bg-[#D9D9D9] items-center rounded-3xl">
          <div className="ml-4 flex w-[86px] h-[86px] bg-[#00497D] text-6xl text-center items-center justify-center rounded-2xl font-bold">
            3°
          </div>
          <h6 className="text-black ml-1">Siga o caminho indicado!</h6>
        </div>
      </section>
      <footer>
        <nav className="">
          <button className=" h-32 w-80 bg-[#00497D] rounded-2xl text-white text-4xl font-bold">
            Iniciar
          </button>
        </nav>
      </footer>
    </main>
  );
}

export default Tutorial;
