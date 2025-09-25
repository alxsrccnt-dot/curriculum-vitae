import JOBS from "../constants/JobHistory.js";
3
function JobBox({ job }) {
  return (
    <div className='rounded-border job-box'>
      <h1>{job.company}</h1>
      <div className="job-details">
        <p>&#11044;</p><p>Job title:</p><p>{job.title}</p>
      </div>
      <div className="job-details">
        <p>&#11044;</p><p>Period:</p><p>{job.startDate}&#11166;{job.endDate}</p>
      </div>
      <p>{job.description}</p>
    </div>
  );
}

function JobsList() {
  const jobs = [];

  JOBS.forEach((job) => {
    jobs.push(
      <JobBox
        job={job}/>
    );
  });

  return (
    <section className="job-section">
        <h1>Job History</h1>
        {jobs}
    </section>
  );
}

export default JobsList;