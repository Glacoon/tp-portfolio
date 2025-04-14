import React from 'react';
// import './ProfileSection.css';
import profileImage from '../../images/profile.png';

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-header">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1 className="profile-name">Guillian CELLE</h1>
        </div>
        <div className="profile-body">
          <p className="profile-description">
            Hello, je suis Guillian CELLE, étudiant en 1ere année d'ingénierie informatique au CNAM, j'espère que vous allez apprécier mon portfolio. <br></br>
            Je suis passionné par plein de sujets aléatoires allant du sport auto à la paléontologie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
