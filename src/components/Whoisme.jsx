import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaArrowDown } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'
import foto from '../assets/otavioP.jpeg'

function Whoisme() {

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE] text-gray-800">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <img
            src={foto}
            alt="Foto de Otávio"
            className="w-32 h-32 rounded-full shadow-lg border-4 border-white object-cover hover:scale-105 transition-transform duration-300 hover:active:scale-150" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-2xl font-medium">
            Olá! Meu nome é{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              Otávio
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-4xl font-bold transition-all duration-1000 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-transparent hover:bg-clip-text">Desenvolvedor Front-End</h1>
          <p className="text-2xl mt-2 text-gray-500">
            Sou um desenvolvedor front-end em treinamento, dedicado a aprender e
            aprimorar minhas habilidades em criação de interfaces modernas e
            responsivas. Estudo no Instituto Federal Catarinense – Campus
            Araquari, onde venho adquirindo experiência prática com tecnologias
            web e desenvolvendo projetos que unem design e funcionalidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-3xl mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
            Linguagens e Tecnologias
          </h2>

          <div className="flex justify-center gap-8 mt-2">
            <FaReact className="text-5xl text-blue-500 hover:scale-110 transition-transform duration-300" />
            <SiTailwindcss className="text-5xl text-cyan-500 hover:scale-110 transition-transform duration-300" />
            <FaJs className="text-5xl text-yellow-400 hover:scale-110 transition-transform duration-300" />
            <FaCss3Alt className="text-5xl text-blue-600 hover:scale-110 transition-transform duration-300" />
            <FaHtml5 className="text-5xl text-orange-500 hover:scale-110 transition-transform duration-300" />
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all">
            Ver Projetos
          </button>
          <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-all">
            Contato
          </button>
        </motion.div>

        <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/otavio-augusto-da-roza-1ab85a362/"
            className="text-xl text-gray-700 hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-blue-600 transition-colors"
          >
            Portfólio
          </a>
        </motion.div>

        <FaArrowDown className="float" />
      </div>
    </section>
  )
}

export default Whoisme
