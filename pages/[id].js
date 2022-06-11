import { useRouter } from 'next/router';

function ProjectPage() {
  const router = useRouter();
  const projectId = router.query.id;
  console.log(projectId);

  return (
    <section>
      <p>
        Arrival is a UK startup focused on full developemnt cycle
        of zero-emission vehicles.
      </p>
    </section>
  );
}

export default ProjectPage;
