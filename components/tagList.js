import Tag from './tag';
import classes from './tagList.module.css';
import allTags from '../data/tags.json';

function TagList(props) {
  const { projectTags } = props;

  console.log;

  return (
    <div className={classes.list}>
      {projectTags.map((projectTag) =>
        allTags.tags.map((tag) => {
          if (projectTag === tag.id) {
            return (
              <Tag
                text={tag.text}
                path={tag.path}
                
              />
            );
          }
        })
      )}
    </div>
  );
}

// export async function getStaticProps(context) {
//   const filePath = path.join(process.cwd(), "data", "tags.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);
//   console.log(data);

//   return {
//     props: {
//       allTags: data.tags,
//     },
//     revalidate: 100,
//   };
// }

// export async function getStaticProps(context) {
//   const filePath = path.join(process.cwd(), 'data', 'tags.json');
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);
//   console.log(data + 'tagList')

//   return {
//     props: {
//       projects: data.projects,
//     },
//     revalidate: 10,
//   };
// }

export default TagList;
