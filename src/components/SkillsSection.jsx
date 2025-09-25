import Skills from "../constants/SkillsList.js";

function SkillItem({ item }) {
  return (
    <div className="skill-item">
      &#9830;
      <p>{item}</p>
    </div>
  );
}

function SkillBox({ skill }) {
  const items = [];

  skill.items.forEach((item) => {
    items.push(
      <SkillItem
        item={item.name}/>
    );
  });

  return (
    <div className="rounded-border skill-box">
      <h1>{skill.category}</h1>
      <div className="skill-items">{items}</div>
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
    <section className="skill-section">
      <h1>Skills</h1>
      {skills}
    </section>
  );
}

export default SkillsList;