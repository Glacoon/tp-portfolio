import React from 'react';
import TechMemoryGame from '../components/TechMemoryGame';

function Fun() {
  return (
    <section className="fun-page">
      <h1 className="section-title">Espace ludique</h1>
      <p className="fun-intro">
        Cette page présente quelques démos ludiques qui mettent en évidence mes compétences 
        techniques avec React, notamment l'utilisation avancée des hooks, la mémorisation 
        et d'autres concepts modernes de React.
      </p>
      
      <TechMemoryGame />
    </section>
  );
}

export default Fun; 