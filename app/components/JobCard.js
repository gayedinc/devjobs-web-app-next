import Link from 'next/link';

export default function JobCard({ job }) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="card">
        <div className="card-logo" style={{ backgroundColor: job.logoBackground }}>
          <img src={job.logo.replace('./assets', '/assets')} alt={job.company} />
        </div>
        <div className="card-info">
          <span>{job.postedAt} • {job.contract}</span>
          <h2>{job.position}</h2>
          <span className="company">{job.company}</span>
        </div>
        <p>{job.location}</p>
      </div>
    </Link>
  );
}