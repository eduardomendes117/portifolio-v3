import React from "react";
import Image from "next/image";

const Projetos = () => {
  return (
    <section className="w-full py-12 bg-[#181a2a]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-2">Projetos</h2>
        <p className="text-2xltext-gray-300 mb-8">
          Confira alguns dos meus projetos desenvolvidos com tecnologias
          modernas e design responsivo.
        </p>
        {(() => {
          const projects = [
            {
              src: "/images/spotify.png",
              alt: "Imagem de teste 2",
              title: "Spotify Imersão Alura",
              description:
                "Clone da interface do Spotify feito com React e Tailwind durante a Imersão Alura. Projeto responsivo e moderno.",
              deploy: "https://spotify-imersaoalura.vercel.app/",
              github:
                "https://github.com/eduardomendes117/spotify-imersao-react",
            },
            {
              src: "/images/xbox.png",
              alt: "Imagem de teste 3",
              title: "Projeto Xbox",
              description:
                "Landing page do Xbox Series X, desenvolvida com HTML, CSS e JavaScript. Design inspirado no site oficial.",
              deploy: "https://projeto-xbox-eduu.vercel.app/",
              github: "https://github.com/eduardomendes117/projeto-xbox",
            },
            {
              src: "/images/optimus.png",
              alt: "Imagem de teste 4",
              title: "OptimusTech",
              description:
                "Página institucional fictícia para empresa de tecnologia, utilizando Next.js e Tailwind CSS.",
              deploy: "https://optimustech-eduu.vercel.app/",
              github: "https://github.com/eduardomendes117/optimustech",
            },
            {
              src: "/images/netflix.png",
              alt: "Imagem de teste 5",
              title: "Netflix Clone",
              description:
                "Clone da interface da Netflix feito com React, consumindo API para exibir filmes e séries.",
              deploy: "https://netflixclone-eduu.vercel.app/",
              github: "https://github.com/eduardomendes117/projeto-netflix",
            },
            {
              src: "/images/fokus.png",
              alt: "Imagem de teste 6",
              title: "Fokus",
              description:
                "Aplicação de Pomodoro para foco e produtividade, desenvolvida com JavaScript puro.",
              deploy: "https://fokus-eduu.vercel.app/",
              github: "https://github.com/eduardomendes117/fokus",
            },
            {
              src: "/images/aluraplus.png",
              alt: "Imagem de teste 7",
              title: "Alura+",
              description:
                "Landing page do serviço Alura+, criada com HTML, CSS e responsividade.",
              deploy: "https://aluraplus-eduu.vercel.app/",
              github: "https://github.com/eduardomendes117/aluraplus",
            },
          ];
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.github}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={400}
                    height={220}
                    className="object-cover w-full h-44"
                  />
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-[#181a2a]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.deploy}
                        className="inline-block px-4 py-2 bg-[#6b63ff] text-white rounded-full font-semibold hover:bg-[#574fd6] transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Projeto
                      </a>
                      <a
                        href={project.github}
                        className="inline-block px-4 py-2 border-2 border-[#6b63ff] text-[#6b63ff] rounded-full font-semibold hover:bg-[#e8eafc] transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default Projetos;
