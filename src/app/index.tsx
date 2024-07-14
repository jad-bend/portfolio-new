import Link from "next/link";

const SpinningCircle = () => {
  const paths = [
    "/projects",
    "/projects/theswarmgarden",
    "/projects/microsoftloop",
    "/projects/tigerfocus",
  ];
  const randomPath = paths[Math.floor(Math.random() * paths.length)];

  return (
    <div className="flex items-center justify-center h-screen font-azeret">
      <div className="relative flex items-center justify-center">
        <div className="w-[510px] h-[510px] border-2 border-dashed border-[#B13535] rounded-full animate-spin-slow dashed"></div>
        <div className="absolute text-[#B13535] text-[30px] font-thin text-center">
          INDEX
          <div>
            <Link
              href={randomPath}
              className="italic text-[#B13535] text-[20px] font-thin hover:opacity-50"
            >
              take me somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IndexPage() {
  return <SpinningCircle />;
}
