import React from 'react';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import '../scss/contact.scss';


function Contact() {
  return (
    <div className="Contact">
      <div className="ContactLeft">
      <div className="ContactTitle">
        <h1>CONTACT</h1>
      </div>
      <div className="ContactInfo">
        <div className="ContactIconList">
          <p className="ContactIconPhone"><i className="fas fa-phone-square"></i><span> +33 6 74 14 77 04</span></p>
          <p className="ContactIconAdress"><i className="fas fa-map-marker-alt"></i> <span> 11 chemin de Cournarette</span>
              <br /> <span> 31210 Gourdan-Polignan</span>
          </p>
          <p className="ContactIconMail"><i className="fas fa-envelope"></i> geoffrey.frioli@gmail.com</p>
        </div>
      </div>
      <div className="ContactFormDiv">
        <ContactForm />
      </div>
      </div>
      <div className="ContactRight">
      <ContactMap />
      </div>
    </div>
  );
}

export default Contact;