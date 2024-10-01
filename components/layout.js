import { Fragment } from "react";
import Header from "./header";
import socialData from "../data/socialData";
import Footer from "./footer";
import BottomText from "./bottom-text";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { animate } from "framer-motion";
import { transform } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.5,
      ease: [0.175, 0.885, 0.32, 1.1],
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    transition: { duration: 0.5 },
    scale: 1,
    opacity: 1,
  },
};

const blurItem = {
  hidden: { opacity: 0, scale: 0.98, y: 32, filter: "blur(16px)" },
  show: {
    transition: { duration: 0.25 },
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

function Layout(props) {
  return (
    <Fragment>
      <motion.div variants={container} initial="hidden" animate="show">
        <Header variants={item} />

        {props.children}
        {/* это значит что внутри будет то, что между <mainfragment>ВОТ ЭТО</mainfragment> */}

        <Footer items={socialData} variants={blurItem} />

        <BottomText variants={blurItem} />
      </motion.div>
    </Fragment>
  );
}

export default Layout;
