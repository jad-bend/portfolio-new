import Link from "next/link";

export default function LeftSidebar() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed h-full border-r-[1px] border-r-[#161616] scale-90"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium pl-5">
            <li className="pr-4">
              <Link
                href="/"
                className="text-[#B13535] font-thin text-[30px] font-azeret hover:opacity-50"
              >
                <div className=" pt-[80px]">jad</div>
                <div>choaib</div>
                <div className="text-[13px]">software, ux, product</div>
              </Link>
            </li>
            <hr className="h-[1.5px] bg-[#161616]" />
            <li className="pr-4">
              <div className="text-[#B13535] font-thin text-[30px] font-azeret ">
                <Link href="/projects" className=" pt-[15px] hover:opacity-50">
                  PROJECTS
                </Link>
                <ul className=" text-[#161616] text-[15px] ">
                  <li className="pt-[10px] hover:opacity-50 active:underline">
                    <Link href="/projects/theswarmgarden">
                      The Swarm Garden
                    </Link>
                  </li>
                  <li className="pt-[10px] hover:opacity-50 active:underline">
                    <Link href="/projects/microsoftloop">Microsoft Loop</Link>
                  </li>
                  <li className="pt-[10px] hover:opacity-50 active:underline">
                    <Link href="/projects/tigerfocus">TigerFocus</Link>
                  </li>
                  <li className="pt-[10px]">curate* (coming soon!)</li>
                </ul>
              </div>
            </li>
            <hr className="h-[1.5px] bg-[#161616]" />

            <li className="pr-4">
              <div className="text-[#B13535] font-thin text-[30px] font-azeret ">
                <span className=" pt-[15px]">CREATIVE</span>
                <ul className=" text-[#161616] text-[15px] ">
                  <li className="pt-[10px]">
                    <Link
                      href="/photography"
                      className="hover:opacity-50 active:underline"
                    >
                      Photography
                    </Link>
                  </li>
                  <li className="pt-[10px]">
                    <Link
                      href="https://www.youtube.com/@bodyhypedance"
                      target="_blank"
                      className="pt-[10px] hover:opacity-50 active:underline"
                    >
                      BODYHYPE Dance Co.
                    </Link>
                  </li>
                  <li className="pt-[10px]">
                    <Link
                      href="https://www.youtube.com/user/BACDanceCompany"
                      target="_blank"
                      className="hover:opacity-50 active:underline"
                    >
                      Black Arts Company
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <hr className="h-[1.5px] bg-[#161616]" />
            <li className="pr-4">
              <div className="text-[#B13535] font-thin text-[30px] font-azeret ">
                <span className=" pt-[15px]">ACTIVISM</span>
                <ul className=" text-[#161616] text-[15px] pb-[10px]">
                  <li className="pt-[10px]">MESIJ @ Princeton</li>
                </ul>
              </div>
            </li>
            <hr className="h-[1.5px]  bg-[#161616]" />
          </ul>
        </div>
      </aside>
    </>
  );
}
