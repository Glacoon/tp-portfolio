import React from 'react';
// import './ProjectSection.css';
import ProjectItem from '../ProjectItem';
import ProjectForm from '../ProjectForm';

const ProjectSection = ({ projects, deleteProject, addProject }) => {
  return (
    <section className="project-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              deleteProject={deleteProject} 
            />
          ))
        ) : (
          <p>Aucun projet à afficher pour le moment.</p>
        )}
      </div>
      <ProjectForm addProject={addProject} />
    </section>
  );
};

export default ProjectSection;
