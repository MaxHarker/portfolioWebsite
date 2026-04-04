import { useState } from 'react'
import { projectItems } from '../data/projects'

function Projects() {
  const [activeId, setActiveId] = useState(projectItems[0]?.id)
  const activeProject = projectItems.find((project) => project.id === activeId)

  return (
    <section className="page-section projects-page">
      <div className="section-header">
        <span className="eyebrow">Projects</span>
        <h2>Selected work and project highlights.</h2>
        <p>
          Browse a selection of project items with a quick overview and a
          detail panel for each project.
        </p>
      </div>

      <div className="projects-layout">
        <div className="project-list">
          {projectItems.map((project) => (
            <button
              key={project.id}
              type="button"
              className={
                project.id === activeId ? 'project-card active' : 'project-card'
              }
              onClick={() => setActiveId(project.id)}
            >
              <div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <span className="project-action">View details</span>
            </button>
          ))}
        </div>

        <div className="project-detail-panel">
          {activeProject ? (
            <article>
              <div className="project-detail-hero">
                <img src={activeProject.image} alt={activeProject.title} />
              </div>
              <div className="project-detail-copy">
                <h3>{activeProject.title}</h3>
                <span className="project-category">{activeProject.category}</span>
                <p>{activeProject.details}</p>
                <div className="project-tags">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={activeProject.link} target="_blank" rel="noreferrer" className="button-outline">
                  View live concept
                </a>
              </div>
            </article>
          ) : (
            <p>Select a project to see more details.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
