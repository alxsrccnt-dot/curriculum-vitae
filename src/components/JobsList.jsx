import { FaBuilding, FaCalendar } from "react-icons/fa";
import JOBS from "../constants/JobHistory.js";
import { FaPerson } from "react-icons/fa6";


function JobDescriptionWithLineBreaks({description}) {
  const jobDescriptionWithLineBreaks = [];

  description.forEach(
    (item) => {
    jobDescriptionWithLineBreaks.push(
      <span className ="job-description-item">
        {item}
        <br/>
      </span>
    );
  });

  return jobDescriptionWithLineBreaks;
}

function JobBox({ job }) {
  return (
    <div className='job-box single-column bg-dark'>
      <div className="job-details bg-gray">
        <div className="left-side">
          {job.company} - {job.title}
        </div>
        <div className="right-side">
          <p>{job.startDate}</p>
          <p>&#11166;</p>
          <p>{job.endDate}</p>
        </div>
      </div>
      <div className="small-colored-squere"></div>
      <JobDescriptionWithLineBreaks description={job.description}/>
      <div className="technologies-used">
        <span>Technologies used:</span>
        <span>{job.tehnologies}</span>
      </div>
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
        {jobs}
    </section>
  );
}

export default JobsList;