interface CardProps {
  children: React.ReactNode;
  className?: string;
  number?: string;
}
function Card({ children, className, number }: CardProps) {
  return (
    <div
      className={`flex m-2 w-[341px] h-[100px] bg-[#D9D9D9] items-center rounded-3xl ${className}`}
    >
      <div className="ml-4 text-white flex w-[70px] h-[70px] bg-[#00497D] text-4xl text-center items-center justify-center rounded-2xl font-bold">
        {number}°
      </div>
      <h6 className="text-black ml-1">{children}</h6>
    </div>
  );
}
export default Card;
