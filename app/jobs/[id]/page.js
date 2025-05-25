import data from '@/public/data.json';
import JobDetails from '@/app/components/JobDetails';

export default function JobDetailsPage({ params }) {
  const jobId = parseInt(params.id);
  const job = data.find((j) => j.id === jobId);

  if (!job) return <p>Job not found</p>;

  return (
    <div className="container">
      <JobDetails job={job} />
    </div>
  );
}