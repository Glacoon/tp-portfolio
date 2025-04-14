// Fonction pour charger les projets depuis le fichier JSON
export const fetchProjects = async () => {
  try {
    const response = await fetch('/data/projects.json');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des projets');
    }
    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error('Erreur:', error);
    return [];
  }
};

// Fonction pour exporter les projets actuels sous forme de fichier JSON téléchargeable
export const exportProjectsToJSON = (projects) => {
  const data = { projects };
  const dataStr = JSON.stringify(data, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = 'projects.json';
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}; 