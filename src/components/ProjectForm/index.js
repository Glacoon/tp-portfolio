import React, { useState } from 'react';
// import './ProjectForm.css';

const ProjectForm = ({ addProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologiesInput, setTechnologiesInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convertir l'entrée des technologies en tableau
    const technologies = technologiesInput
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech !== '');
    
    addProject({ 
      title, 
      description,
      technologies
    });
    
    // Réinitialiser le formulaire
    setTitle('');
    setDescription('');
    setTechnologiesInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h3>Ajouter un projet</h3>
      
      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre du projet"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description du projet"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="technologies">Technologies (séparées par des virgules)</label>
        <input
          type="text"
          id="technologies"
          value={technologiesInput}
          onChange={(e) => setTechnologiesInput(e.target.value)}
          placeholder="React, Node.js, MongoDB, etc."
        />
        <small className="form-hint">Ex: React, JavaScript, CSS</small>
      </div>
      
      <button type="submit" className="submit-btn">Ajouter le projet</button>
    </form>
  );
};

export default ProjectForm;

