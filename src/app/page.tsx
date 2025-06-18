"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Projetos from "@/components/projetos";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8eafc] via-[#e8eafc] to-[#c1c8e4] flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl mx-auto">
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <Image
              src="https://avatars.githubusercontent.com/u/107651217?v=4"
              alt="Foto de Perfil"
              width={180}
              height={180}
              className="rounded-full border-4 border-[#6b63ff] shadow-lg object-cover"
              priority
            />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#181a2a] mb-2 leading-tight">
              Olá, sou <span className="text-[#6b63ff]">Eduardo</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#574fd6] mb-4">
              Desenvolvedor Frontend
            </h2>
            <p className="text-gray-700 mb-6 max-w-md">
              Desenvolvedor front-end de 19 anos. Tenho experiência em
              JavaScript, TypeScript e com frameworks como Next.js e React. Atuo
              na criação de landing pages e websites modernos e responsivos.
            </p>
            <div className="flex gap-4">
              <a
                href="#projetos"
                className="px-6 py-2 bg-[#6b63ff] hover:bg-[#574fd6] transition text-white rounded-full font-semibold shadow"
              >
                Ver Portfólio
              </a>
              <a
                href="mailto:seuemail@email.com"
                className="px-6 py-2 border-2 border-[#6b63ff] text-[#6b63ff] hover:bg-[#e8eafc] transition rounded-full font-semibold"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Habilidades
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#e8eafc] rounded-full mb-3 text-3xl">
                <SiHtml5 className="text-orange-500" />
              </div>
              <span className="font-semibold text-gray-800">HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#e8eafc] rounded-full mb-3 text-3xl">
                <SiCss3 className="text-blue-500" />
              </div>
              <span className="font-semibold text-gray-800">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#e8eafc] rounded-full mb-3 text-3xl">
                <SiJavascript className="text-yellow-400" />
              </div>
              <span className="font-semibold text-gray-800">JAVASCRIPT</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#e8eafc] rounded-full mb-3 text-3xl">
                <SiReact className="text-cyan-400" />
              </div>
              <span className="font-semibold text-gray-800">REACT</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#e8eafc] rounded-full mb-3 text-3xl">
                <SiTypescript className="text-blue-600" />
              </div>
              <span className="font-semibold text-gray-800">TYPESCRIPT</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#e8eafc] rounded-full mb-3 text-3xl">
                <SiTailwindcss className="text-teal-400" />
              </div>
              <span className="font-semibold text-gray-800">TAILWIND CSS</span>
            </div>
          </div>
        </div>
      </section>

      <Projetos />

    <section id="contato" className="w-full py-12 bg-[#e8eafc]">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Contato
            </h2>
            <form
                action="mailto:eduardo12mendes2016@gmail.com"
                method="POST"
                encType="text/plain"
                className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-6 max-w-lg mx-auto"
            >
                <div>
                    <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="Nome"
                        required
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6b63ff]"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="Email"
                        required
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6b63ff]"
                    />
                </div>
                <div>
                    <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">
                        Mensagem
                    </label>
                    <textarea
                        id="mensagem"
                        name="Mensagem"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6b63ff]"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#6b63ff] hover:bg-[#574fd6] transition text-white font-semibold py-2 px-6 rounded-full shadow"
                >
                    Enviar
                </button>
            </form>
        </div>
    </section>

      <Footer />
    </div>
  );
}
