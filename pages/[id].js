import { useRouter } from "next/router";
import { Fragment } from "react";
import ProjectImage from "../components/projectImage";
import fs from "fs/promises";
import path from "path";

function ProjectPage(props) {
  const { blocks } = props;
  console.log(blocks);
  const router = useRouter();
  const projectId = router.query.id;

  return blocks.map((block) => {
    return (
      <section key={block.id}>
        {block.content.map((contentItem) => {
          if (contentItem.type === "text") {
            return <p>{contentItem.data}</p>;
          }

          if (contentItem.type === "header") {
            return <h2 className="sectionHeader">{contentItem.data}</h2>;
          }

          if ((contentItem.type === "image")) {
            console.log('we have an image!');
            return <ProjectImage src={contentItem.src} caption={contentItem.caption}/>
          }
        })}
      </section>
    );
  });

  /*   return blocks.map((block) => {
    block.content.map((item) => {
      return <p>{item.data}</p>;
    });
  }); */

  // blocks.content.map((item) => console.log(item));

  /*   return blocks.map((block) =>
  block.content.map((data) => {
    return <section><p>{data.data}</p></section>;
  })
); */

  /*   return blocks.map((block) =>
    block.content.map((data) => {
      return (
        <section>
          <p>{data.data}</p>
        </section>
      );
    })
  ); */

  /*   blocks.map((block) => {
    block.map((content) => {
      console.log(content.data);
    });
  }); */

  // blocks.map((block) => {
  //   console.log(block.content);
  //   return (
  //     <section>
  //       <p>{block.content}</p>
  //     </section>
  //   );
  // });

  /* return (
    <Fragment>
      <section>
        <p>
          Arrival is a UK startup focused on full developemnt cycle
          of zero-emission vehicles.
        </p>
      </section>

      <section>
        <h2 className="sectionHeader">My role</h2>
        <p>
          Nullam ut ultricies ex. Pellentesque ut finibus mauris, in porta orci.
          Etiam maximus leo eu ligula feugiat egestas. Nam consequat vitae erat
          a suscipit. Sed ultrices auctor iaculis.
        </p>
      </section>

      <section>
        <h2 className="sectionHeader">My role</h2>
        <p>
          Nullam ut ultricies ex. Pellentesque ut finibus mauris, in porta orci.
          Etiam maximus leo eu ligula feugiat egestas. Nam consequat vitae erat
          a suscipit. Sed ultrices auctor iaculis.
        </p>
        <ProjectImage />
        <ProjectImage />
      </section>
    </Fragment>
  ); */
}

export default ProjectPage;

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/arrival",
      // Object variant:
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data/projects", "arrival.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      blocks: data.blocks,
    },
    revalidate: 10,
  };
}
