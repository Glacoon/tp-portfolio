import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Fun from './pages/Fun';
import { fetchProjects, exportProjectsToJSON } from './services/projectService';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger les projets depuis le fichier JSON
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const projectsData = await fetchProjects();
      setProjects(projectsData);
      setLoading(false);
    };

    loadProjects();
  }, []);

  // Fonctions pour manipuler les projets (uniquement en mémoire)
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
      technologies: project.technologies || []
    };
    setProjects([...projects, newProject]);
  };
  
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Fonction pour exporter les projets
  const handleExportProjects = () => {
    exportProjectsToJSON(projects);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNav />
        {!loading && (
          <div className="export-container">
            <button 
              className="export-btn" 
              onClick={handleExportProjects}
            >
              Exporter les projets (JSON)
            </button>
          </div>
        )}
        {loading ? (
          <div className="loading">Chargement des projets...</div>
        ) : (
          <Routes>
            <Route path="/" element={
              <Home 
                projects={projects} 
                addProject={addProject} 
                deleteProject={deleteProject} 
              />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={
              <Projects 
                projects={projects} 
                addProject={addProject} 
                deleteProject={deleteProject} 
              />
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun" element={<Fun />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;