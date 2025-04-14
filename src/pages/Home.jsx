import React from 'react';
import ProfileSection from '../components/ProfileSection';
import ProjectSection from '../components/ProjectSection';

function Home({ projects, addProject, deleteProject }) {
  return (
    <>
      <ProfileSection />
      <ProjectSection 
        projects={projects} 
        deleteProject={deleteProject} 
        addProject={addProject}
      />
    </>
  );
}

export default Home; 