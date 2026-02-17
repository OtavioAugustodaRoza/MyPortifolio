import { useState } from "react";

function TalkWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center mt-20 mb-20 bg-gradient-to-r from-[#FDFBFB] to-[#EBEDEE] px-4">
      
      <div id="contato" className="flex flex-col gap-3 justify-center items-center text-center">
        <h1 className="text-4xl font-semibold  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Entre em Contato</h1>
        <h2 className="text-gray-600 text-[20px]  max-w-xl">
          Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
        </h2>
      </div>

      <div className="mt-10 w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      
          <div className="flex flex-col gap-2">
            <label className="text-sm flex flex-initial font-medium text-purple-600">
              Seu Nome
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
              className="border border-gray-300 rounded-lg p-3 
                         focus:outline-none focus:ring-2 
                         focus:ring-purple-600 transition"
            />
          </div>

      
          <div className="flex flex-col gap-2">
            <label className="text-sm flex flex-initial  font-medium text-purple-600">
              Seu Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu email"
              required
              className="border border-gray-300 rounded-lg p-3 
                         focus:outline-none focus:ring-2 
                         focus:ring-purple-600 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm flex flex-initial  font-medium text-purple-600">
              Sua Mensagem
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
              rows="4"
              required
              className="border border-gray-300 rounded-lg p-3 
                         focus:outline-none focus:ring-2 
                         focus:ring-purple-600 transition resize-none"
            />
          </div>

         
          <button
            type="submit"
            className=" text-white py-3 rounded-xl 
                      bg-purple-500  hover:opacity-90 transition-all cursor-pointer"
          >
            Enviar Mensagem
          </button>

        </form>
      </div>

    </section>
  );
}

export default TalkWithUs;
