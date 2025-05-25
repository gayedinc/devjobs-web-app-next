import JobCard from './JobCard';

export default function JobList({ jobs, onSelect }) {
  return (
    <div className="content">
      {jobs.map((job) => (
        <div key={job.id} onClick={() => onSelect(job)}>
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
}