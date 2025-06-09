interface CardProps {
  children: React.ReactNode;
  className?: string;
  number: string;
  description?: string;
  variant: "tutorial" | "location_card";
}
function Card({
  children,
  className,
  number,
  description,
  variant = "tutorial",
}: CardProps) {
  if (variant === "location_card") {
    return (
      <div
        className={`flex m-2 w-[341px] h-[100px] bg-[#efeeee] items-center rounded-3xl shadow-xl transition-colors hover:bg-white duration-300  ${className}`}
      >
        <div className="ml-4 text-white flex w-[60px] h-[60px] bg-[#00497D] text-4xl text-center items-center justify-center rounded-2xl font-bold">
          {number}°
        </div>
        <div className="flex flex-col">
          <h3 className="ml-2 text-[#002845] text-justify font-bold text-2xl text-nowrap">
            {children}
          </h3>
          <h4 className="ml-2 text-justify">{description}</h4>
        </div>
      </div>
    );
  }

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
