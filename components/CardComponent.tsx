export default function CardComponent({
  children = null,
  suit = "",
  rank = "",
}: {
  children?: React.ReactNode;
  suit?: string;
  rank?: string;
}) {
  return (
    <div className="rounded-lg border border-black bg-white">
      {/* h-42 = 10.5rem & w-30 = 7.5rem */}
      <div className="relative flex h-28 w-20 items-center justify-center text-xl font-bold md:h-[10.5rem] md:w-[7.5rem] md:text-2xl lg:h-56 lg:w-40 lg:text-3xl">
        <h1 className="absolute left-0 top-0 ml-1 mt-0 md:ml-1.5 md:mt-0.5 lg:ml-2 lg:mt-1">
          {rank}
        </h1>
        <h1 className="text-lg md:text-xl lg:text-2xl">{suit}</h1>
        <h1 className="rg:ml-2 rg:mb-1 absolute bottom-0 right-0 mb-0 mr-1 rotate-180 md:mb-0.5 md:mr-1.5">
          {rank}
        </h1>
        {children}
      </div>
    </div>
  );
}
