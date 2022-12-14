import React from 'react';
import '../styles/components/projects.sass';
import { MdCatchingPokemon, MdOutlineFastfood, MdWeb } from 'react-icons/md';

const projects = [
  {
    name: 'Pokedex',
    thumbnail: MdCatchingPokemon,
  },
  {
    name: 'Recipe App',
    thumbnail: MdOutlineFastfood,
  },
  {
    name: 'Portfólio',
    thumbnail: MdWeb,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="sections-projects-container">
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.name} className="project-card-container">
            <h1>{project.name}</h1>
            <a href="url">
              <project.thumbnail />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
