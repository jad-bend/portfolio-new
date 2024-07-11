"use client";
import { useRouter } from "next/navigation";
import IndexPage from ".";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  "use client";
  const pathname = usePathname();
  const items = pathname.split("/");

  console.log(pathname, items);
  return (
    <div className="flex gap-4 text-sm font-azeret font-normal uppercase">
      {items.map((item, i) => {
        if (i !== 0 && i < items.length - 1) {
          return (
            <>
              <span key={item} className="text-[15px]">
                {item}
              </span>

              <span>{">"}</span>
            </>
          );
        } else if (i !== 0 && i < items.length) {
          return (
            <>
              <span key={item} className="text-[15px]">
                {item}
              </span>
            </>
          );
        }
      })}
    </div>
  );
}

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <IndexPage />
    </motion.div>
  );
};

export default Home;
