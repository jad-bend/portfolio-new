"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const SpinningCircle = () => {
  const paths = [
    "/projects/theswarmgarden",
    "/projects/microsoftloop",
    "/projects/tigerfocus",
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="flex justify-center font-azeret text-[82px] font-thin text-[#B13535]">
          projects
        </div>
        <div className=" flex font-azeret justify-center text-[20px] text-[#B13535] font-thin">
          research / industry / side projects
        </div>
        <div className="grid grid-cols-2 gap-0 m-16 mt-10 font-thin ">
          <Link href="/projects/theswarmgarden" className="relative">
            <div className="absolute flex items-center justify-center z-10  font-azeret w-[100%] h-[100%] bg-[#762121] hover:opacity-50 transition">
              <span className="text-[#fefcf5] text-[20px] opacity-100">
                The Swarm Garden
              </span>
            </div>
            <img
              loading="lazy"
              src="/theswarmgarden/front.png"
              className="object-cover h-[250px] w-[100%]"
            />
          </Link>
          <Link href="/projects/microsoftloop" className="relative">
            <div className="absolute flex items-center justify-center z-10 font-azeret w-[100%] h-[100%] bg-[#983030] hover:opacity-50 transition">
              <span className="text-[#fefcf5] text-[20px] opacity-100">
                Microsoft Loop
              </span>
            </div>
            <img
              loading="lazy"
              src="/microsoftloop/loophero.png"
              className="object-cover h-[250px] w-[100%]"
            />
          </Link>
          <Link href="projects/tigerfocus" className="relative">
            <div className="absolute flex items-center justify-center z-10  font-azeret w-[100%] h-[100%] bg-[#b15555] hover:opacity-50 transition">
              <span className="text-[#fefcf5] text-[20px] opacity-100">
                TigerFocus
              </span>
            </div>
            <img
              loading="lazy"
              src="/tigerfocus/tigerfocushero.png"
              className="object-cover h-[250px] w-[100%]"
            />
          </Link>
          <div className="relative">
            <div className="absolute flex items-center justify-center z-10  font-azeret w-[100%] h-[100%] bg-[#561414] hover:opacity-50 transition">
              <span className="text-[#fefcf5] text-[20px] opacity-100">
                curate*
              </span>
            </div>
            <img loading="lazy" className="object-cover h-[100%] w-[100%]" />
          </div>{" "}
        </div>
      </motion.div>
    </>
  );
};

export default function IndexPage() {
  return <SpinningCircle />;
}
