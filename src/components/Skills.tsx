const skills = ["Typescript", "Javascript", "NodeJS", "ReactJS", "Java", "Python", "HTML", "CSS"]

function Skills(){
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-array">
                {
                    skills.map((skill, index) => (
                        <div className="skill-wrapper" key={index}>{skill}</div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;