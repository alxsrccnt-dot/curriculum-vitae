import JobsList from "../components/JobsList";
import SkillsList from "../components/SkillsSection";

const Work = () => {
  return (
    <div className='two-columns'>
      <div className='bigger-column'>
        <JobsList/>
      </div>
      <div className='smaller-column'>
        <SkillsList/>
      </div>
    </div>
  );
}

export default Work;