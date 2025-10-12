import { useState } from 'react'

function MyProjects() {
  const [filtro, setFiltro] = useState('Todos')
  const projetos = [
    {
      id: 1,
      nome: 'Gerenciador de tarefas',
      tipo: 'React',
      descricao:
        'Projeto de rede social inclusiva voltada para pessoas neurodivergentes, oferecendo um espaço seguro e acolhedor para interação. ',
      link: 'curso-react-ashy-xi.vercel.app',
    },
    {
      id: 2,
      nome: 'NutriVitta',
      tipo: 'Html+Css+Js',
      descricao:
        'Projeto de rede social inclusiva voltada para pessoas neurodivergentes, oferecendo um espaço seguro e acolhedor para interação. ',
      link: 'new-pi-2k25.vercel.app',
    },
    {
      id: 6,
      nome: 'Calculadora',
      tipo: 'Html+Css+Js',
      descricao:
        'Projeto de rede social inclusiva voltada para pessoas neurodivergentes, oferecendo um espaço seguro e acolhedor para interação. ',
      link: 'otavioaugustodaroza.github.io/calculadora/',
    },
    {
      id: 3,
      nome: (
        <>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            (Em desenvolvimento)
          </span>
        </>
      ),
      descricao:
        'Projeto de rede social inclusiva voltada para pessoas neurodivergentes, oferecendo um espaço seguro e acolhedor para interação. ',
      link: 'ainda não temos',
      tipo: 'React',
    },
    {
      id: 4,
      nome: 'Este Site',
      tipo: 'React',
      descricao:
        'Projeto de rede social inclusiva voltada para pessoas neurodivergentes, oferecendo um espaço seguro e acolhedor para interação. ',
      link: 'my-portifolio-iota-inky.vercel.app/',
    },
    {
      id: 5,
      nome: 'Detox digital',
      tipo: 'Html+Css+Js',
      descricao:
        'Projeto de rede social inclusiva voltada para pessoas neurodivergentes, oferecendo um espaço seguro e acolhedor para interação. ',
      link: 'rafagameplays.github.io/site-de-telas-finalizado/questionario.html',
    },
  ]

  const projetosFiltrados = projetos.filter((pro) => {
    if (filtro === 'Todos') return true
    return pro.tipo === filtro
  })

  return (
    <section className="min-h-screen w-full flex flex-col gap-11 items-center mt-7 bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE]">
      <div>
        <h1 className="text-4xl font-medium" id="projects">
          Meus{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
            Projetos
          </span>
        </h1>
        <h2 className="text-gray-600 text-2xl mt-2">
          Confira meus projetos mais recentes
        </h2>
      </div>

      <div className="flex gap-4 rounded-2xl border-2 border-purple-600 p-1 text-purple-600">
        {['Todos', 'React', 'Html+Css+Js'].map((item) => (
          <button
            key={item}
            onClick={() => setFiltro(item)}
            className={`px-6 py-2 rounded-2xl font-medium transition-colors duration-300 ${
              filtro === item
                ? 'bg-purple-600 text-white'
                : 'bg-transparent hover:bg-purple-200'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full px-4">
        {projetosFiltrados.map((pro) => (
          <div
            key={pro.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center transition-transform duration-500 hover:scale-110"
          >
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex flex-col gap-2 justify-center items-center">
                <h3 className="text-2xl font-bold">{pro.nome}</h3>
                <h4 className="font-semibold text-blue-600">{pro.tipo}</h4>
              </div>
              <p className="text-gray-600 text-[20px]">{pro.descricao}</p>
              <a
                href={'https://' + pro.link}
                target="_blank"
                className="px-20 py-2 bg-gradient-to-r from-purple-500 to-[#5B86E5] text-white rounded-xl hover:opacity-90 transition-all"
              >
                Saiba mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyProjects
