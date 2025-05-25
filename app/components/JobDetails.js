export default function JobDetails({ job }) {
  return (
    <div className="card-details">
      <div className="card-top">
        <div className="card-left-top">
          <div className="detail-logo" style={{ backgroundColor: job.logoBackground }}>
            <img src={job.logo.replace('./assets', '/assets')} alt="" />
          </div>
          <div className="card-head">
            <h2>{job.company}</h2>
            <span>{job.company.toLowerCase()}.com</span>
          </div>
        </div>
        <a href={job.website}>Company Site</a>
      </div>

      <div className="details-info">
        <div className="info-head">
          <div>
            <span>{job.postedAt} • {job.contract}</span>
            <h2>{job.position}</h2>
            <p>{job.location}</p>
          </div>
          <div>
            <a href={job.apply}>Apply Now</a>
          </div>
        </div>

        <div className="description">
          <p>{job.description}</p>
        </div>

        <div className="requirements">
          <h2>Requirements</h2>
          <p>{job.requirements.content}</p>
          <ul>
            {job.requirements.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className="will-do-section">
          <h2>What You Will Do</h2>
          <p>{job.role.content}</p>
          <ol>
            {job.role.items.map((item, i) => <li key={i}>{item}</li>)}
          </ol>
        </div>
      </div>

      <div className="company-info-bottom">
        <div className="company-inf">
          <h2>{job.position}</h2>
          <span>{job.company}</span>
        </div>
        <div className="bottom-btn">
          <a href={job.apply}>Apply Now</a>
        </div>
      </div>
    </div>
  );
}