import data from "@/public/data.json";

export default async function JobDetailsPage({ params }) {
  const jobId = parseInt(params.id);
  const job = data.find((j) => j.id === jobId);

  if (!job) return <p>Job not found</p>;

  const JobDetails = (await import("@/app/components/JobDetails")).default;

  return (
    <div className="container">
      <JobDetails job={job} />
    </div>
  );
}