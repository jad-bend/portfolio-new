import Link from "next/link";

export default function LeftSidebar() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-[65px] left-0 w-[210px] h-full border-r-[2px] border-r-[#161616] ms-10"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="text-[#B13535] font-thin text-[30px] font-azeret"
              >
                <div className=" pt-[80px]">jad</div>
                <div>choaib</div>
                <div className="text-[13px]">software, ux, product</div>
              </Link>
            </li>
            <hr className="h-[2px] bg-[#161616]" />
            <li>
              <div className="text-[#B13535] font-thin text-[30px] font-azeret ">
                <span className=" pt-[15px]">PROJECTS</span>
                <ul className=" text-[#161616] text-[15px] ">
                  <li className="pt-[10px] hover:opacity-50 active:underline">
                    <Link href="/projects/theswarmgarden">
                      The Swarm Garden
                    </Link>
                  </li>
                  <li className="pt-[10px] hover:opacity-50 active:underline">
                    <Link href="/projects/microsoftloop">Microsoft Loop</Link>
                  </li>
                  <li className="pt-[10px]">TigerFocus</li>
                  <li className="pt-[10px]">curate*</li>
                </ul>
              </div>
            </li>
            <hr className="h-[2px] bg-[#161616]" />
            <li>
              <div className="text-[#B13535] font-thin text-[30px] font-azeret ">
                <span className=" pt-[15px]">CREATIVE</span>
                <ul className=" text-[#161616] text-[15px] ">
                  <li className="pt-[10px]">BODHYPE Dance Co.</li>
                  <li className="pt-[10px]">Black Arts Company</li>
                  <li className="pt-[10px]">Photography</li>
                </ul>
              </div>
            </li>
            <hr className="h-[2px] bg-[#161616]" />
            <li>
              <div className="text-[#B13535] font-thin text-[30px] font-azeret ">
                <span className=" pt-[15px]">ACTIVISM</span>
                <ul className=" text-[#161616] text-[15px] pb-[10px]">
                  <li className="pt-[10px]">MESIJ @ Princeton</li>
                  <li className="pt-[10px]">MSFT OPG Allyship</li>
                </ul>
              </div>
            </li>
            <hr className="h-[2px]  bg-[#161616]" />
          </ul>
        </div>
      </aside>
    </>
  );
}