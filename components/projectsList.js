import Project from './project';

function ProjectsList(props) {
  const { items } = props;
  
  return items.map((item) => (
    <Project
      name={item.name}
      description={item.description}
      key={item.id}
      image={item.image}
      id={item.id}
      projectTags={item.projectTags}
      nda={item.nda}
    />
  ));

  //   return <Project header='Arrival' description = 'Good project' />
}

export default ProjectsList;
