import Skills from "../constants/SkillsList.js";

function SkillBox({ skill }) {
  return (
    <div className="skill-box">
      <h1>{skill.category}</h1>
      <p>{skill.items}</p>
    </div>
  );
}

function SkillsList() {
  const skills = [];

  Skills.forEach((skill) => {
    skills.push(
      <SkillBox
        skill={skill}/>
    );
  });

  return (
    <section>
        <h1>What i know</h1>
        <div className="rounded-border">
          {skills}
        </div>
    </section>
  );
}

export default SkillsList;