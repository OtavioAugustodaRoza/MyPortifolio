import { Link } from 'react-scroll'
function Footer() {
    return (
      <footer className="w-full bg-zinc-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
  
          <div className="flex flex-col md:flex-row justify-between gap-10">
  
       
            <div className="space-y-3">
              <h2 className="text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">Otávio</h2>
              <p className="text-zinc-400">
                Desenvolvedor Front-End
              </p>
            </div>
  
         
            <div className="space-y-3">
              <h3 className="text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                        to="me"
                        smooth={true}
                        duration={800}
                    
                    className="text-zinc-400 hover:text-purple-400  duration-300 hover:-translate-y-1 inline-block cursor-pointer"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={800}
                    className="text-zinc-400 hover:text-purple-400  duration-300 cursor-pointer hover:-translate-y-1 inline-block"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                      to="contato"
                      smooth={true}
                      duration={800}
                    className="text-zinc-400 hover:text-purple-400  cursor-pointer duration-300 hover:-translate-y-1 inline-block"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
  
            <div className="space-y-3">
              <h3 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold text-lg">Redes</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-zinc-400 hover:text-purple-400 duration-300 hover:-translate-y-1 inline-block"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-purple-400 duration-300 hover:-translate-y-1 inline-block"
                >
                  LinkedIn
                </a>
              </div>
            </div>
  
          </div>
  
          
          <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500 text-sm">
            © {new Date().getFullYear()} Otavio. Todos os direitos reservados.
          </div>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;
  