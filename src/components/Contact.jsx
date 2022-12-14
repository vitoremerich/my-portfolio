import React from 'react';
import '../styles/components/contact.sass';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export default function Contact() {
  return (
    <section id="contato" className="section-contact-container">
      <h2>Contato</h2>
      <div className="contact-container">
        <a href="https://github.com/vitoremerich">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vitoremerich/">
          <FaLinkedin />
        </a>
        <a href="mailto:vitoremerich.contato@gmail.com ">
          <AiOutlineMail />
        </a>
        <a href="https://wa.me/5543991209187">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}
