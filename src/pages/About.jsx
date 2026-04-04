function About() {
  return (
    <section className="page-section about-page">
      <div className="section-header">
        <span className="eyebrow">About Me</span>
        <h2>Background, skills, and expertise</h2>
        <p>
          I'm a computer science student finishing my senior year at Weber State University.
          My experience blends software engineering, data science, 
          web and mobile development, and information technology.
          I enjoy gathering and analyzing data, building solutions 
          that solve real problems, and learning new 
          technologies to expand my skill set.
        </p>
      </div>

      <div className="split-grid">
        <article>
          <h3>Experience & Development Work</h3>
          <p>
            I have hands-on experience delivering technical solutions in professional environments. As an
            Information Systems Intern, I supported troubleshooting across hardware, software and networking systems,
            helping scale infrastructure and maintain reliability at a large healthcare
            provider. In prior roles, I've also supported learners by debugging complex code and helping them
            grasp foundational programming concepts.
          </p>
          <p>
            Academically I've built projects and completed coursework involving a wide range of programming
            languages and paradigms — from system-level languages like C and C++ to dynamic languages like Python,
            and application frameworks like Dart/Flutter. I also have strong familiarity with database
            development using SQL and development tooling like Git, and I approach problems with structured
            engineering methodologies and a focus on clarity and performance.
          </p>
        </article>

        <aside>
          <div className="about-card">
            <h4>Technical Skills</h4>
            <ul>
              <li>Languages: Python, C, C++, JavaScript, SQL, Dart</li>
              <li>Frontend: React, responsive layout design</li>
              <li>Mobile: Flutter for cross-platform development</li>
              <li>Database: SQL querying and schema design</li>
            </ul>
          </div>
          <div className="about-card">
            <h4>Tools & Practices</h4>
            <ul>
              <li>Version Control: Git</li>
              <li>Build & Package Tools: Vite, CLI workflows</li>
              <li>Development Processes: Modular design, testing strategies</li>
              <li>Technical Troubleshooting and System Support</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About