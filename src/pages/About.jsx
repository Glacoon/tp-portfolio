import React from 'react';

function About() {
  return (
    <section className="about-section">
      <h2 className="section-title">À propos de moi</h2>
      <div className="about-content">
        <p>
          Bienvenue sur mon portfolio ! Je suis un étudiant au CNAM en 1ere année d'ingénierie informatique.
        </p>
        <p>
          Mes compétences incluent React, JavaScript, HTML/CSS, et bien plus encore.
          Je suis toujours en train d'apprendre de nouvelles technologies et méthodologies
          pour améliorer mes compétences.
        </p>
        <h3>Formation</h3>
        <ul>
          <li>BUT Informatique - Université de Pau et des Pays de l'Adour - ANGLET (2021-2024) </li>
        </ul>
        <h3>Expérience</h3>
        <ul>
          <li>Développeur alternant - ATM Gaming (2024-2025)</li>
          <li>Développeur alternant - Geek Tonic - (2023-2024)</li>
          <li>Développeur stagiaire - Arobiz - (Avril-Juin 2023)</li>
        </ul>
      </div>
    </section>
  );
}

export default About; 