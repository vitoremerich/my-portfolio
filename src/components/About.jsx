import React from 'react';
import '../styles/components/about.sass';

export default function About() {
  return (
    <section id="sobre" className="section-container">
      <div className="about-container">
        <div className="style-bar" />
        <h2>Um pouco sobre mim...</h2>
        <p>
          Oi, eu me chamo Vitor e moro em Londrina/PR. Atualmente
          trabalho como desenvolvedor web utilizando alguns frameworks populares no mercado,
          metodologias ágeis e muita dedicação. Confira abaixo meu github
          para ver alguns dos meus projetos.
        </p>
        <a href="https://github.com/vitoremerich">@vitoremerich</a>
      </div>
      <img src="https://static.wixstatic.com/media/7e5d09_d9bdcb6c04e14249a51a7c5d23a073a8~mv2.png/v1/fill/w_876,h_667,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/mrth%20website%20cd%20mockup%201.png" alt="mockup" />
    </section>
  );
}
