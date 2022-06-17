import Tag from './tag';
import classes from './tagList.module.css';
import tags from '../data/tags.json';

function TagList(props) {
  const { projectTags } = props;
console.log(props)

  

  // if (!projectTags) {
  //   console.log('no tag for this projects');
  // } else {
  //   projectTags.map((tag) => console.log(tag));
  // }

  

  // return (
  //   <div className={classes.list}>
  //     <Tag
  //       text={tags['e-vehicles'].text}
  //       backColor={tags['e-vehicles'].backColor}
  //       textColor={tags['e-vehicles'].textColor}
  //       isIcon={tags['e-vehicles'].isIcon}
  //     />
  //     <Tag
  //       text={tags.startup.text}
  //       backColor={tags.startup.backColor}
  //       textColor={tags.startup.textColor}
  //     />
  //   </div>
  // );
}

// export async function getStaticProps(context) {
//   const filePath = path.join(process.cwd(), 'data', 'data.json');
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       tags: data.tags,
//     },
//     revalidate: 10,
//   };
// }


export default TagList;

