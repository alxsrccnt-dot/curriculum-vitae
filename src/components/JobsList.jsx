import JOBS from "../constants/JobHistory.js";

function JobBox({ job }) {
  return (
    <div className='rounded-border job-box'>
      <h1>{job.title}</h1>
      <div className="job-details">
        <p>{job.company}</p>
        <p>-</p>
        <p>{job.period}</p>
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
    <section>
        <h1>Job History</h1>
        {jobs}
    </section>
  );
}

export default JobsList;