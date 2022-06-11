import { useRouter } from 'next/router';
import { Fragment } from 'react';
import ProjectImage from '../components/projectImage';

function ProjectPage() {
  const router = useRouter();
  const projectId = router.query.id;
  console.log(projectId);

  return (
    <Fragment className='body'>
      <section >
        <p>
          Arrival is a UK startup focused on full developemnt cycle
          of zero-emission vehicles.
        </p>
      </section>

      <section>
        <h2 className='sectionHeader'>My role</h2>
        <p>
         Nullam ut ultricies ex. Pellentesque ut finibus mauris, in porta orci. Etiam maximus leo eu ligula feugiat egestas. Nam consequat vitae erat a suscipit. Sed ultrices auctor iaculis.
        </p>
      </section>

      <section>
        <h2 className='sectionHeader'>My role</h2>
        <p>
         Nullam ut ultricies ex. Pellentesque ut finibus mauris, in porta orci. Etiam maximus leo eu ligula feugiat egestas. Nam consequat vitae erat a suscipit. Sed ultrices auctor iaculis.
        </p>
        <ProjectImage/>
        <ProjectImage/>
      </section>
    </Fragment>
  );
}

export default ProjectPage;
