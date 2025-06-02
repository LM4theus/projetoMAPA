"use client";
import fpblogo from "../../assets/FPB-icon.png";
function Header() {
  return (
    <header className="flex w-full items-center justify-center p-5">
      <figure>
        <img src={fpblogo} alt="" />
      </figure>
    </header>
  );
}
export default Header;
