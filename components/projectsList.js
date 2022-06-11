import Project from './project';

function ProjectsList(props) {
  const { items } = props;

  return items.map((item) => (
    <Project
      header={item.header}
      description={item.description}
      key={item.id}
      image={item.image}
      id={item.id}
    />
  ));

  //   return <Project header='Arrival' description = 'Good project' />
}

export default ProjectsList;
