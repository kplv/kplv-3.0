import { useRouter } from "next/router";
import ProjectImage from "../components/projectImage";
import fs from "fs/promises";
import path from "path";
import Project from "../components/project";
import Head from "next/head";
import { motion, stagger } from "framer-motion";
import ProjectVideo from "../components/projectVideo";

function ProjectPage(props) {
  // Animation part
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    hide: {
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.98, y: 32, filter: "blur(16px)" },
    show: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
  };

  // Animation part ends
  const { blocks, projects } = props;
  const projectId = useRouter().query.id;

  let currentProject = projects.find((obj) => {
    return obj.id === projectId;
  });

  function findNextProject() {
    if (projectId === "arrival") {
      return 2;
    } else if (projectId === "sber") {
      return 3;
    } else if (projectId === "other") {
      return 0;
    } else {
      return 1;
    }
  }

  const projectContent = blocks.map((block, i) => {
    return (
      <motion.section variants={item} key={i}>
        {block.content.map((contentItem) => {
          if (contentItem.type === "text") {
            return <p>{contentItem.data}</p>;
          }

          if (contentItem.type === "header") {
            return <h2 className="sectionHeader">{contentItem.data}</h2>;
          }

          if (contentItem.type === "image") {
            return (
              <ProjectImage
                src={contentItem.src}
                caption={contentItem.caption}
                fit={contentItem.fit}
              />
            );
          }

          if (contentItem.type === "video") {
            return (
              <ProjectVideo
                src={contentItem.src}
                caption={contentItem.caption}
              />
            );
          }
        })}
      </motion.section>
    );
  });

  const nextProjectNumber = findNextProject();

  return (
    <div>
      <main>{projectContent}</main>
      {/* {blocks.map((block) => {
        <motion.section variants={item} key={block.id}>
          {block.content.map((contentItem) => {
            if (contentItem.type === "text") {
              return <p>{contentItem.data}</p>;
            }

            if (contentItem.type === "header") {
              return <h2 className="sectionHeader">{contentItem.data}</h2>;
            }

            if (contentItem.type === "image") {
              return (
                <ProjectImage
                  src={contentItem.src}
                  caption={contentItem.caption}
                  fit={contentItem.fit}
                />
              );
            }

            if (contentItem.type === "video") {
              return (
                <ProjectVideo
                  src={contentItem.src}
                  caption={contentItem.caption}
                />
              );
            }
          })}
        </motion.section>;
      })} */}

      <h2 className="sectionHeader">Next</h2>
      <Project
        name={projects[nextProjectNumber].name}
        description={projects[nextProjectNumber].description}
        key={projects[nextProjectNumber].id}
        image={projects[nextProjectNumber].image}
        id={projects[nextProjectNumber].id}
        projectTags={projects[nextProjectNumber].projectTags}
        nda={projects[nextProjectNumber].nda}
      />
      <Head>
        <title>{currentProject.name + " — Denis Kopylov"}</title>
        <meta name="description" content={currentProject.description} />
        <meta property="og:title" content="Denis Kopylov" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/thumb.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:description"
          content="Denis Kopylov — senior product designer at Arrival"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export default ProjectPage;

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/trade",
      "/arrival",
      "/sber",
      "/other",
      // Object variant:
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    "data/projects",
    `${params.id}.json`
  );
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const filePathProjects = path.join(process.cwd(), "data", "data.json");
  const jsonDataProjects = await fs.readFile(filePathProjects);
  const dataProjects = JSON.parse(jsonDataProjects);

  return {
    props: {
      blocks: data.blocks,
      projects: dataProjects.projects,
    },
    revalidate: 1,
  };
}
