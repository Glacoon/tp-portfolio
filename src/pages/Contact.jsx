import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter du code pour envoyer les données du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Me contacter</h2>
      <p className="contact-intro">
        Vous avez une question ou vous souhaitez collaborer sur un projet ? 
        N'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact; 