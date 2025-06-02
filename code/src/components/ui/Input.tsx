"use client";
import searchIcon from "../../assets/search-icon.png";

interface InputProps {
  className?: string;
  id: string;
}

function Input({ className, id }: InputProps) {
  return (
    <div
      className={`flex m-2 w-[341px] h-[60px] items-center rounded-3xl shadow-xl ${className}`}
    >
      <div className="ml-4 text-white flex w-[30px] h-[30px] text-4xl text-center items-center justify-center font-bold">
        <img src={searchIcon} alt="" />
      </div>
      <input
        id={id}
        className=" ml-3 w-full h-full rounded-3xl focus:outline-none focus:ring-0 text-xl text-[#00497D]"
      />
    </div>
  );
}
export default Input;
