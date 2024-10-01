import fs from "fs/promises";
import path from "path";
import Head from "next/head";
import HelloText from "../components/hello-text";
import ProjectList from "../components/projectsList";
import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectVideo from "../components/projectVideo";

const container = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
  hide: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.98, y: 32, filter: "blur(16px)" },
  show: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
};

export default function Home(props) {
  const { projects } = props;

  return (
    <div>
      <Head>
        <title>Denis Kopylov</title>
        <meta
          name="description"
          content="Denis Kopylov — senior product designer"
        />
        <meta property="og:title" content="Denis Kopylov" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/thumb.png" />
        <meta
          property="og:description"
          content="Denis Kopylov — senior product designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        <motion.main variants={container} key="mainPage">
          <motion.div variants={item} >
            <HelloText />
          </motion.div>
          <motion.div variants={item}>
            <ProjectList items={projects} />
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 1,
  };
}
