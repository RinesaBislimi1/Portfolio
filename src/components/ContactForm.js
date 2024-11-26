import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import '../styles/ContactForm.css';

// Initialize EmailJS with your public user ID (found in your EmailJS account)
init('oiI0K2IcNOlwm1olc'); // Replace this with your actual public user ID

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Create a message object
    const message = {
      to_name: 'Rinesa Bislimi',
      from_name: formData.name,
      from_email: formData.email, // Ensure this is used in your EmailJS template
      subject: formData.subject,
      message: formData.message,
    };

    console.log('Message object:', message);

    // Send the email using EmailJS
    send('service_d09fqub', 'template_557c68o', message)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrorMessage('');
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        setErrorMessage('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="contact-form-section">
      <h2>Contact Me</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          value={formData.subject}
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="button-submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
