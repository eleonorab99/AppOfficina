const Contattaci = () => {
  return (
    <div className="min-h-screen p-4 md:pt-5">
      <div className="m-4 md:m-12 text-black">
        <div className="text-3xl md:text-4xl font-extrabold">
          RICHIESTA APPUNTAMENTO
        </div>
        <p className="mt-4 md:mt-10">*Campi obbligatori</p>
      </div>

      {/* Input nome e cognome */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-7 mx-4 md:mx-10">
        <input
          type="text"
          id="nome"
          placeholder="*Nome"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
        <input
          type="text"
          id="cognome"
          placeholder="*Cognome"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
      </div>

      {/* Input email e telefono */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-7 mx-4 md:mx-10 mt-4 md:mt-10">
        <input
          type="text"
          id="e-mail"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="*E-mail"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="*Telefono"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
      </div>

      {/* Tipo veicolo */}
      <div className="mx-4 md:mx-10 mt-6 md:mt-10">
        <div className="text-xl text-orange-500 font-bold mb-4">
          Tipo veicolo:
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="auto" 
              name="veicolo" 
              value="auto"
              className="w-4 h-4 cursor-pointer checked:accent-orange-500" 
            />
            <label htmlFor="auto" className="ml-2 cursor-pointer">Auto</label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="moto" 
              name="veicolo" 
              value="moto"
              className="w-4 h-4 cursor-pointer checked:accent-orange-500" 
            />
            <label htmlFor="moto" className="ml-2 cursor-pointer">Moto</label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="furgone" 
              name="veicolo" 
              value="furgone"
              className="w-4 h-4 cursor-pointer checked:accent-orange-500" 
            />
            <label htmlFor="furgone" className="ml-2 cursor-pointer">Furgone</label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="monopattino-elettrico" 
              name="veicolo" 
              value="monopattino elettrico"
              className="w-4 h-4 cursor-pointer checked:accent-orange-500" 
            />
            <label htmlFor="monopattino-elettrico" className="ml-2 cursor-pointer">
              Monopattino elettrico
            </label>
          </div>
        </div>
      </div>

      {/* Input marca e modello */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-7 mx-4 md:mx-10 mt-4 md:mt-10">
        <input
          type="text"
          id="marca"
          placeholder="*Marca"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
        <input
          type="text"
          id="modello"
          placeholder="*Modello"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
      </div>
    </div>
  );
};

export default Contattaci;
