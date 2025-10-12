import { useState } from 'react'

function MyProjects() {
  const [filtro, setFiltro] = useState('Todos')
  const projetos = [
    { id: 1, nome: 'Gerenciador de tarefas', tipo: 'React' },
    { id: 2, nome: 'NutriVitta', tipo: 'Html+Css+Js' },
    {
      id: 3,
      nome: 'Neurose (Em desenvolvimento)',
      descricao:
        'Projeto de rede social inclusiva voltada para pessoas neurodivergentes, oferecendo um espaço seguro e acolhedor para interação, compartilhamento de experiências e construção de comunidade com foco em acessibilidade e bem-estar. ',
    image:'url vou fazer depois to cansadão',
      tipo: 'React',
    },
    { id: 4, nome: 'Este Site', tipo: 'React' },
    { id: 5, nome: 'Detox digital', tipo: 'Html+Css+Js' },
  ]

  const projetosFiltrados = projetos.filter((pro) => {
    if (filtro === 'Todos') return true
    return pro.tipo === filtro
  })

  return (
    <section
      className="min-h-screen w-full flex flex-col gap-11 items-center mt-7 bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE]"
      id="projects"
    >
      <div>
        <h1 className="text-4xl font-medium">
          Meus{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
            Projetos
          </span>
        </h1>
        <p className="text-gray-600 text-2xl mt-2">
          Confira meus projetos mais recentes
        </p>
      </div>

      <div className="flex gap-4 rounded-2xl border-2 border-purple-600 p-1 text-purple-600">
        {['Todos', 'React', 'Html+Css+Js'].map((item) => (
          <button
            key={item}
            onClick={() => setFiltro(item)}
            className={`px-6 py-2 rounded-2xl font-medium transition-colors duration-300 ${
              filtro === item
                ? 'bg-purple-600 text-white'
                : 'bg-transparent hover:bg-purple-100'
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
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center"
          >
            {pro.nome}
        
            <p>{pro.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyProjects
