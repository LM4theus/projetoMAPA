interface ScreenProps {
  children?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

function Screen({
  children,
  className,
  width = 375,
  height = 667,
}: ScreenProps) {
  return (
    <main
      className={`${
        className ?? ""
      } bg-gray-100 flex items-center justify-center min-h-screen`}
    >
      <div
        className="bg-white shadow-xl rounded-xl overflow-hidden flex flex-col justify-between w-full h-full max-w-md max-h-[90vh]"
        style={{
          width: width ? `${width}px` : undefined,
          height: height ? `${height}px` : undefined,
        }}
      >
        {children}
      </div>
    </main>
  );
}

export default Screen;
