import Link from "next/link";

export default function RightSidebar() {
  return (
    <>
      <aside
        id="right-sidebar"
        className="fixed h-full border-l-[1px] border-l-[#161616] scale-90"
        aria-label="RightSidebar"
      >
        <div className="h-full py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium pr-5">
            <li>
              <a>
                <div className="text-[#B13535] font-thin text-[30px] font-azeret pl-4 pt-[10px]">
                  INFO
                </div>
                <div className="text-[#161616] font-thin text-[15px] font-azeret text-justify pt-[10px] pl-4">
                  <span className=" font-bold">jad choaib bendarkawi</span> is a
                  senior at Princeton University studying electrical & computer
                  engineering with minors in technology & society and robotics &
                  intelligent systems. he’s excited about building interactive
                  digital and spatial experiences. jad centers design justice
                  principles, user empathy, and speculative design in his
                  approach to technology.
                </div>
                <div className="text-[#161616] font-thin text-[15px] font-azeret pt-[15px] text-justify pl-4 pb-[10px]">
                  jad’s research interests include swarm robotics, collective
                  intelligence, human-robot collaborative art-making, and
                  interaction design that stimulates learning and creative
                  expression.
                </div>
              </a>
            </li>
            <hr className="h-[1.5px] bg-[#161616]" />
            <li>
              <div className="text-[#B13535] font-thin text-[30px] font-azeret pl-4 ">
                NODES
              </div>
              <ul className="text-[#161616] font-thin text-[15px] font-azeret pl-4 pt-[10px] pb-[10px]">
                <li>
                  <Link
                    href="https://github.com/jad-bend"
                    className="flex items-center hover:opacity-50"
                    target="_blank"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <a className="ml-2">Github</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/jadbendarkawi/"
                    className="flex items-center hover:opacity-50"
                    target="_blank"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <a className="ml-2">Linkedin</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:jadb@princeton.edu"
                    className="flex items-center hover:opacity-50"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <a className="ml-2">Email</a>
                  </Link>
                </li>
              </ul>
            </li>
            <hr className="h-[1.5px] bg-[#161616]" />
            <li>
              <span className="font-thin text-[10px] text-[#161616] font-azeret pl-2 pt-[20px]">
                © 2024{" "}
                <a
                  href="https://jadbendarkawi.com/"
                  className="hover:underline"
                >
                  jad bendarkawi
                </a>
                . All Rights Reserved.
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
