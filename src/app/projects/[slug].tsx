"use client";
import { useRouter } from "next/router";
import SwarmGardenPage from "./theswarmgarden/page";
import Layout from "../layout";
import IndexPage from "..";
import { motion } from "framer-motion";

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  let content;
  switch (slug) {
    case "theswarmgarden":
      content = <SwarmGardenPage />;
      break;
    case "microsoftloop":
      content = <SwarmGardenPage />;
      break;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {content}
    </motion.div>
  );
};

export default DynamicPage;
