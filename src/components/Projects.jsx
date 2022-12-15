import React from 'react';
import '../styles/components/projects.sass';
import { MdCatchingPokemon, MdOutlineFastfood, MdWeb } from 'react-icons/md';

const projects = [
  {
    name: 'Pokedex',
    thumbnail: MdCatchingPokemon,
    url: 'https://vitor-pokedex.netlify.app/',
  },
  {
    name: 'Recipe App',
    thumbnail: MdOutlineFastfood,
    url: 'https://github.com/vitoremerich/recipe-app',
  },
  {
    name: 'Portfólio',
    thumbnail: MdWeb,
    url: 'https://github.com/vitoremerich/my-portfolio',
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="sections-projects-container">
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.name} className="project-card-container">
            <h1>{project.name}</h1>
            <a href={project.url}>
              <project.thumbnail />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
