import Skills from "../constants/SkillsList.js";

function SkillItem({ item }) {
  return (
    <p className="skill-item">{item}</p>
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
    <div className="rounded-border skill-box bg-gray">
      <h2>{skill.category}</h2>
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
      <h2>Skills learned</h2>
      {skills}
    </section>
  );
}

export default SkillsList;