"use client";

import Image from "next/image";
import { Eye, Github } from "lucide-react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

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
      deploy: "#",
      github: "#",
    },
    {
      src: "/images/xbox.png",
      alt: "Imagem de teste 3",
      deploy: "#",
      github: "#",
    },
    {
      src: "/images/optimus.png",
      alt: "Imagem de teste 4",
      deploy: "#",
      github: "#",
    },
    {
      src: "/images/netflix.png",
      alt: "Imagem de teste 5",
      deploy: "#",
      github: "#",
    },
    {
      src: "/images/fokus.png",
      alt: "Imagem de teste 6",
      deploy: "#",
      github: "#",
    },
    {
      src: "/images/aluraplus.png",
      alt: "Imagem de teste 7",
      deploy: "#",
      github: "#",
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

  return (
    <>
      {/* Navegação fixa corrigida */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-50 py-5 px-7"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Eduardo.
          </motion.h1>

          <motion.ul
            className="flex gap-3 text-3xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={fadeIn}>
              <a
                href="https://github.com/eduardomendes117"
                target="_blank"
                aria-label="GitHub de Eduardo Mendes"
              >
                <FaGithub />
              </a>
            </motion.li>

            <motion.li variants={fadeIn}>
              <a
                href="https://www.linkedin.com/in/eduardo-mendes-26538030b/"
                target="_blank"
                aria-label="LinkedIn de Eduardo Mendes"
              >
                <FaLinkedin />
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </motion.nav>

      <header className="flex justify-center items-center h-[calc(100svh-40px)] px-5 min-h-screen bg-xadres bg-xadres-size bg-opacity-10">
        <motion.div
          className="relative max-w-screen-sm text-center flex flex-col gap-4 rounded-full px-0 lg:px-8 py-12 before:absolute before:inset-0 before:-z-10 before:bg-white/15 before:blur-[100px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-bold uppercase bg-gradient-to-r from-white via-white/70 to-white/10 text-transparent bg-clip-text"
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
            Com experiência em criar interfaces modernas e intuitivas.
            Especializado em React, Next.js, TypeScript e design responsivo.
          </motion.p>
          <motion.div
            className="mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#works"
              className="bg-teal-500 text-background font-medium px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors mr-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver projetos
            </motion.a>
            <motion.a
              href=""
              className="border border-teal-500 hover:bg-white/5 font-medium px-6 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Baixar CV
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      <AnimateOnScroll>
        <section id="skills" className="border-t mx-5 p-5 lg:p-10">
          <motion.div
            className="flex flex-wrap justify-between gap-3 lg:gap-10 text-xl lg:text-3xl font-semibold"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "REACT",
              "TYPESCRIPT",
              "TAILWIND CSS",
            ].map((skill, index) => (
              <motion.p
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.1, color: "#5eead4" }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.p>
            ))}
          </motion.div>
        </section>
      </AnimateOnScroll>

      <section id="works" className="my-10 mx-5 max-w-screen-xl lg:mx-auto">
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
                  className="bg-white"
                  fill
                  alt={image.alt}
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

      <section id="about" className="my-16 mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <AnimateOnScroll className="max-w-lg">
            <h2 className="text-4xl font-bold mb-5">Sobre Mim</h2>

            <div className="space-y-4">
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                Desenvolvedor Front-end com experiência em React.js, Next.js,
                Tailwind CSS e TypeScript. Crio interfaces performáticas,
                acessíveis e responsivas, focadas na experiência do usuário.
              </motion.p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://github.com/eduardomendes117.png"
                className="rounded-full shadow-lg object-cover w-48 lg:w-80 h-auto border border-teal-500 p-4"
                alt="Foto profissional"
                width={500}
                height={400}
                priority
              />
            </motion.div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="contact" className="text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mt-10">Contatos</h2>
        </AnimateOnScroll>

        <ul className="max-w-screen-xl mx-7 2xl:mx-auto my-20 flex gap-10 justify-center flex-wrap">
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
              <motion.li
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
              </motion.li>
            </AnimateOnScroll>
          ))}
        </ul>
      </section>

      {/* Botão de voltar ao topo */}
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href="#"
          className="bg-teal-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
      </motion.div>
    </>
  );
}
