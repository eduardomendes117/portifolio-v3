"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Eye, Github } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import NavbarNext from "../components/NavbarNext";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const images = [
    {
      src: "/images/spotify.png",
      alt: "Imagem de teste 2",
      deploy: "https://spotify-imersaoalura.vercel.app/",
      github: "https://github.com/eduardomendes117/spotify-imersao-react",
    },
    {
      src: "/images/xbox.png",
      alt: "Imagem de teste 3",
      deploy: "https://projeto-xbox-eduu.vercel.app/",
      github: "https://github.com/eduardomendes117/projeto-xbox",
    },
    {
      src: "/images/optimus.png",
      alt: "Imagem de teste 4",
      deploy: "https://optimustech-eduu.vercel.app/",
      github: "https://github.com/eduardomendes117/optimustech",
    },
    {
      src: "/images/netflix.png",
      alt: "Imagem de teste 5",
      deploy: "https://netflixclone-eduu.vercel.app/",
      github: "https://github.com/eduardomendes117/projeto-netflix",
    },
    {
      src: "/images/fokus.png",
      alt: "Imagem de teste 6",
      deploy: "https://fokus-eduu.vercel.app/",
      github: "https://github.com/eduardomendes117/fokus",
    },
    {
      src: "/images/aluraplus.png",
      alt: "Imagem de teste 7",
      deploy: "https://aluraplus-eduu.vercel.app/",
      github: "https://github.com/eduardomendes117/aluraplus",
    },
  ];

  // Variantes para animações
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <NavbarNext />

      <header className="flex justify-center items-center h-[calc(100svh-100px)] px-5">
        <motion.div
          className="relative max-w-(--breakpoint-sm) text-center flex flex-col gap-4 rounded-full px-0 lg:px-8 py-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-bold uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Desenvolvedor Frontend
          </motion.h1>
          <motion.p
            className="text-base lg:text-xl text-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Olá! Sou Eduardo, desenvolvedor front-end de 19 anos. Tenho
            experiência em JavaScript, TypeScript e com frameworks como Next.js,
            React. Tenho experiência em criação de landing pages e websites.
          </motion.p>
          <motion.div
            className="mt-4 flex justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#works"
              className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-white/70 transition-colors mr-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver projetos
            </motion.a>
            <motion.a
              href="/pdf/Curriculo_Eduardo_Mendes.pdf"
              download="Curriculo_Eduardo.pdf"
              className="flex items-center gap-2 border border-white hover:bg-white/5 font-medium px-6 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="text-xl" />
              Resumo
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      <AnimateOnScroll>
        <section
          id="skills"
          className="border-t p-5 lg:p-10 max-w-(--breakpoint-xl) lg:mx-auto"
        >
          <motion.div
            className="flex flex-wrap justify-between gap-6 lg:gap-10 text-xl lg:text-3xl font-semibold"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
              { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
              {
                name: "JAVASCRIPT",
                icon: <SiJavascript className="text-yellow-400" />,
              },
              { name: "REACT", icon: <SiReact className="text-cyan-400" /> },
              {
                name: "TYPESCRIPT",
                icon: <SiTypescript className="text-blue-600" />,
              },
              {
                name: "TAILWIND CSS",
                icon: <SiTailwindcss className="text-teal-400" />,
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={fadeIn}
                whileHover={{ scale: 1.1, color: "#5eead4" }}
                transition={{ duration: 0.2 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimateOnScroll>

      <section
        id="works"
        className="my-10 mx-5 max-w-(--breakpoint-xl) lg:mx-auto"
      >
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold">Projetos</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-10">
          {images.map((image, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <motion.div
                className="relative w-full aspect-video group overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />

                {/* Overlay com botões */}
                <motion.div
                  className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={image.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-zinc-900 text-white rounded-lg mx-2 hover:bg-zinc-800 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={18} className="inline" /> Deploy
                  </motion.a>
                  <motion.a
                    href={image.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-zinc-900 text-white rounded-lg mx-2 hover:bg-zinc-800 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} className="inline" /> GitHub
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section id="contact" className="text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mt-10">Contatos</h2>
        </AnimateOnScroll>

        <div className="max-w-(--breakpoint-xl) mx-7 2xl:mx-auto p-20 flex gap-10 justify-center flex-wrap">
          {[
            {
              icon: (
                <FaLinkedinIn className="text-4xl text-white/50 hover:text-white transition-colors" />
              ),
              arial: "LinkedIn de Eduardo Mendes",
              title: "Linkedin",
              value: "@eduardo-mendes-frontend",
              href: "https://www.linkedin.com/in/eduardo-mendes-26538030b/",
            },
            {
              icon: (
                <MdEmail className="text-4xl text-white/50 hover:text-white transition-colors" />
              ),
              arial: "Gmail de Eduardo Mendes",
              title: "E-mail",
              value: "eduardo12mendes2016@gmail.com",
              href: "mailto:eduardo12mendes2016@gmail.com",
            },
            {
              icon: (
                <RiGithubLine className="text-4xl text-white/50 hover:text-white transition-colors" />
              ),
              arial: "Github de Eduardo Mendes",
              title: "Github",
              value: "@eduardomendes117",
              href: "https://github.com/eduardomendes117",
            },
          ].map((contact, index) => (
            <AnimateOnScroll key={index} delay={index * 0.2}>
              <motion.div
                className="p-5 flex flex-col justify-center items-center gap-2"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="border border-white/50 rounded-full p-3 flex items-center justify-center hover:border-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={contact.href}
                    aria-label={contact.arial}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    {contact.icon}
                  </a>
                </motion.div>
                <motion.p className="text-lg font-bold">
                  {contact.title}
                </motion.p>
                <motion.h3 className="text-white/40 text-lg">
                  {contact.value}
                </motion.h3>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Botão de voltar ao topo */}
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isVisible && (
          <motion.a
            href="#"
            className="bg-white text-black p-3 rounded-full shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="voltar ao inicio"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.a>
        )}
      </motion.div>
    </>
  );
}
