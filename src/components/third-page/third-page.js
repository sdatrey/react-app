import React from 'react';
import './third-page.css'
function ThirdPage() {
    return(
        <div classNameName="third">
            <section id="contact" className="contact-section">
  <div className="contact-section-header">
    <h2>Let's work together...</h2>
    <p>How do you relax?</p>
  </div>
  <div className="contact-links">
    <a
      href="https://web.facebook.com/MensaIsaac?ref=bookmarks"
      target="_blank"
      className="btn contact-details"
      ><i className="fab fa-facebook-square"></i> Facebook</a
    >
    <a
      id="profile-link"
      href="https://github.com/freecodecamp"
      target="_blank"
      className="btn contact-details"
      ><i className="fab fa-github"></i> GitHub</a
    >
    <a
      href="https://twitter.com/IsaacMensah2"
      target="_blank"
      className="btn contact-details"
      ><i className="fab fa-twitter"></i> Twitter</a
    >
    <a href="mailto:lordbryce09@gmail.com.com" className="btn contact-details"
      ><i className="fas fa-at"></i> Send an Email</a
    >
    <a href="tel:233.240.812739" className="btn contact-details"
      ><i className="fas fa-mobile-alt"></i> Call Me</a
    >
  </div>
</section>
        </div>
    )


}
export default ThirdPage;