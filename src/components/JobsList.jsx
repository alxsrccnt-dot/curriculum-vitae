import { FaBuilding, FaCalendar } from "react-icons/fa";
import JOBS from "../constants/JobHistory.js";
import { FaPerson } from "react-icons/fa6";
3
function JobBox({ job }) {
  return (
    <div className='job-box two-columns bg-dark'>
      <div className="smaller-column">
        <h2 className="job-details bg-gray"><FaBuilding className='icon'/>{job.company}</h2>
        <div className="job-details bg-gray">
          <FaPerson  className='icon'/><p>{job.title}</p>
        </div>
        <div className="job-details bg-gray">
          <FaCalendar  className='icon'/>
          <div className="job-peroid"><p>{job.startDate}</p>
          <p>&#11166;</p>
          <p>{job.endDate}</p>
          </div>
        </div>
      </div>
      <div className="vertical-colored-line"></div>
      <p className="bigger-column">{job.description}</p>
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