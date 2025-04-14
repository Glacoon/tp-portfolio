import React from 'react';
import ProjectSection from '../components/ProjectSection';

function Projects({ projects, addProject, deleteProject }) {
  return (
    <section className="projects-page">
      <h2 className="section-title">Mes projets</h2>
      <p className="projects-intro">
        Voici une collection de projets sur lesquels j'ai travaillé. 
        Chaque projet représente une opportunité d'apprentissage et de croissance.
      </p>
      <ProjectSection 
        projects={projects}
        deleteProject={deleteProject}
        addProject={addProject}
      />
    </section>
  );
}

export default Projects; 