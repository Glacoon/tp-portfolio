import React from 'react';
// import './ProjectItem.css';
import { useState } from 'react';

const ProjectItem = ({ project, deleteProject }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState(project);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteProject(project.id);
  };

  return (
    <div className="project-item">
      {isEditing ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={editedProject.title}
            onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
          />
          <input
            type="text"
            value={editedProject.description}
            onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
          />
          <button type="submit">Enregistrer</button>
        </form>
      ) : (
        <div className="project-details">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          {project.technologies && (
            <p className="project-technologies">
              Technologies: {project.technologies.join(', ')}
            </p>
          )}
          <button onClick={handleEdit}>Modifier</button>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;