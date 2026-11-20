

import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Hide the success message if the user edits the form again
    setMessageSent(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    // Open the visitor's email application
    window.location.href =
      `mailto:hello@thejournal.com?subject=${subject}&body=${body}`;

    // Show success message
    setMessageSent(true);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  return (
    <main className="contact-page">

      {/* INTRODUCTION */}

      <section className="contact-header">
        <p>THE JOURNAL / GET IN TOUCH</p>
        <h1>Let's Start a Conversation.</h1>
        <span>
          Have a story to share, an idea to discuss or simply want
          to say hello? We'd love to hear from you.
        </span>
      </section>

      {/* CONTACT SECTION */}

      <section className="contact-container">

        <div className="contact-info">

          <p className="contact-label">WE'D LOVE TO HEAR FROM YOU</p>

          <h2>Every great connection starts with a conversation.</h2>

          <p className="contact-description">
            Whether you're a reader, writer, creative or potential
            collaborator, there's always room for a conversation
            at The Journal.
          </p>

          <div className="contact-detail">
            <span>EMAIL US</span>
            <a href="mailto:hello@thejournal.com">
              hello@thejournal.com
            </a>
          </div>

          <div className="contact-detail">
            <span>COLLABORATIONS</span>
            <p>
              Interested in working together? Tell us about your idea.
            </p>
          </div>

          <div className="contact-detail">
            <span>READER FEEDBACK</span>
            <p>
              Your thoughts, suggestions and story ideas matter to us.
            </p>
          </div>

          <div className="contact-socials">
            <h3>Follow The Journal</h3>
            <div>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                Pinterest
              </a>
            </div>
          </div>

        </div>

        {/* CONTACT FORM */}

        <div className="contact-form-container">

          <p className="contact-label">SEND US A MESSAGE</p>
          <h2>We are listening.</h2>

          {/* SUCCESS MESSAGE */}

          {messageSent && (
            <div className="success-message" role="status">
              <span className="success-icon">✓</span>
              <div>
                <h3>Message sent successfully!</h3>
                <p>
                  Thank you for reaching out to The Journal.
                  We appreciate your message.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">What would you like to discuss?</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Story Suggestion">Story Suggestion</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message →
            </button>

          </form>

        </div>

      </section>

      {/* CLOSING SECTION */}

      <section className="contact-bottom">
        <p>A SPACE FOR STORIES, IDEAS AND CONNECTIONS.</p>
        <h2>We look forward to hearing from you.</h2>
      </section>

    </main>
  );
}

export default Contact;
