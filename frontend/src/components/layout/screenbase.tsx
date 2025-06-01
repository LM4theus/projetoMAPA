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
      className={`${className} bg-gray-100 flex items-center justify-center min-h-screen`}
    >
      <div
        className="bg-white shadow-xl rounded-xl overflow-hidden p-0 h-full w-full flex flex-col justify-between "
        style={{ width, height }}
      >
        {children}
      </div>
    </main>
  );
}

export default Screen;
