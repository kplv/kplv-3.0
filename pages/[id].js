import { useRouter } from 'next/router';
import { Fragment } from 'react';
import ProjectImage from '../components/projectImage';
import fs from 'fs/promises';
import path from 'path';
import Project from '../components/project';
import Head from 'next/head';

function ProjectPage(props) {
  const { blocks, projects } = props;
  const projectId = useRouter().query.id;
  console.log(projectId);

  function findNextProject() {
    if (projectId === 'arrival') {
      return 1;
    } else if (projectId === 'sber') {
      return 2;
    } else {
      return 0;
    }
  }

  const nextProjectNumber = findNextProject();

  return (
    <Fragment>
      {blocks.map((block) => {
        return (
          <section key={block.id}>
            {block.content.map((contentItem) => {
              if (contentItem.type === 'text') {
                return <p>{contentItem.data}</p>;
              }

              if (contentItem.type === 'header') {
                return <h2 className='sectionHeader'>{contentItem.data}</h2>;
              }

              if (contentItem.type === 'image') {
                return (
                  <ProjectImage
                    src={contentItem.src}
                    caption={contentItem.caption}
                  />
                );
              }
            })}
          </section>
        );
      })}
      <h2 className='sectionHeader'>Next project</h2>

      <Project
        name={projects[nextProjectNumber].name}
        description={projects[nextProjectNumber].description}
        key={projects[nextProjectNumber].id}
        image={projects[nextProjectNumber].image}
        id={projects[nextProjectNumber].id}
        projectTags={projects[nextProjectNumber].projectTags}
      />
      <Head>
        <title>Some project</title>
        <meta
          name='description'
          content='Denis Kopylov senior product designer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Fragment>
  );
}

export default ProjectPage;

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/arrival',
      '/sber',
      '/other',
      // Object variant:
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    'data/projects',
    `${params.id}.json`
  );
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const filePathProjects = path.join(process.cwd(), 'data', 'data.json');
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
