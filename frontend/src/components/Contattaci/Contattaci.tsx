import { useState } from "react";

const Contattaci = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    tipoVeicolo: "",
    marca: "",
    modello: "",
    settore: "",
    messaggio: "",
    privacyAccettata: false,
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.nome) newErrors.push("Nome obbligatorio");
    if (!formData.cognome) newErrors.push("Cognome obbligatorio");
    if (!formData.email) newErrors.push("Email obbligatoria");
    if (!formData.telefono) newErrors.push("Telefono obbligatorio");
    if (!formData.tipoVeicolo) newErrors.push("Tipo veicolo obbligatorio");
    if (!formData.marca) newErrors.push("Marca obbligatoria");
    if (!formData.modello) newErrors.push("Modello obbligatorio");
    if (!formData.settore) newErrors.push("Settore assistenza obbligatorio");
    if (!formData.messaggio) newErrors.push("Messaggio obbligatorio");
    if (!formData.privacyAccettata)
      newErrors.push("Devi accettare la privacy policy");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form inviato:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen p-4 md:pt-5">
      {errors.length > 0 && (
        <div className="mx-4 md:mx-10 mb-4 p-4 bg-red-100 rounded-md">
          {errors.map((error, index) => (
            <p key={index} className="text-red-600">
              {error}
            </p>
          ))}
        </div>
      )}

      <div className="m-4 md:m-12 text-black">
        <div className="text-3xl md:text-4xl font-extrabold">
          RICHIESTA APPUNTAMENTO
        </div>
        <p className="mt-4 md:mt-10">*Campi obbligatori</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-7 mx-4 md:mx-10">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          placeholder="*Nome"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
        <input
          type="text"
          name="cognome"
          value={formData.cognome}
          onChange={handleInputChange}
          placeholder="*Cognome"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-7 mx-4 md:mx-10 mt-4 md:mt-10">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="*E-mail"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
          placeholder="*Telefono"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
      </div>

      <div className="mx-4 md:mx-10 mt-6 md:mt-10">
        <div className="text-xl text-orange-500 font-bold mb-4">
          Tipo veicolo:
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="tipoVeicolo"
              value="auto"
              checked={formData.tipoVeicolo === "auto"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label htmlFor="auto" className="ml-2 cursor-pointer">
              Auto
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="tipoVeicolo"
              value="moto"
              checked={formData.tipoVeicolo === "moto"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label htmlFor="moto" className="ml-2 cursor-pointer">
              Moto
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="tipoVeicolo"
              value="furgone"
              checked={formData.tipoVeicolo === "furgone"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label htmlFor="furgone" className="ml-2 cursor-pointer">
              Furgone
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="tipoVeicolo"
              value="monopattino elettrico"
              checked={formData.tipoVeicolo === "monopattino elettrico"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label
              htmlFor="monopattino-elettrico"
              className="ml-2 cursor-pointer"
            >
              Monopattino elettrico
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-7 mx-4 md:mx-10 mt-4 md:mt-10">
        <input
          type="text"
          name="marca"
          value={formData.marca}
          onChange={handleInputChange}
          placeholder="*Marca"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
        <input
          type="text"
          name="modello"
          value={formData.modello}
          onChange={handleInputChange}
          placeholder="*Modello"
          className="w-full p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100"
        />
      </div>

      <div className="mx-4 md:mx-10 mt-6 md:mt-10">
        <div className="text-xl text-orange-500 font-bold mb-4">
          Per quale settore hai bisogno di assistenza?
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="settore"
              value="meccanica"
              checked={formData.settore === "meccanica"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label htmlFor="meccanica" className="ml-2 cursor-pointer">
              Autofficina
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="settore"
              value="elettrauto"
              checked={formData.settore === "elettrauto"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label htmlFor="elettrauto" className="ml-2 cursor-pointer">
              Elettrauto
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="settore"
              value="gommista"
              checked={formData.settore === "gommista"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label htmlFor="gommista" className="ml-2 cursor-pointer">
              Carrozzeria
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="settore"
              value="altro"
              checked={formData.settore === "altro"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label htmlFor="altro" className="ml-2 cursor-pointer">
              Aria Condizionata
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="settore"
              value="altro"
              checked={formData.settore === "altro"}
              onChange={handleRadioChange}
              className="w-4 h-4 cursor-pointer accent-orange-500"
            />
            <label htmlFor="altro" className="ml-2 cursor-pointer">
              Mappatura Centraline
            </label>
          </div>
        </div>

        <div className="mt-6 md:mt-10 w-full">
          <textarea
            name="messaggio"
            value={formData.messaggio}
            onChange={handleInputChange}
            placeholder="*Messaggio"
            className="w-full min-h-[100px] max-h-[300px] p-3 rounded-md border border-black focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-100 resize-y"
          />
        </div>
        <label>
          <input
            type="checkbox"
            name="privacyAccettata"
            checked={formData.privacyAccettata}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                privacyAccettata: e.target.checked,
              }))
            }
          />
          Ho letto l' informativa e autorizzo il trattamento dei miei dati
          personali per le finalità ivi indicate.
        </label>
      </div>
      <div className="mx-4 md:mx-10 mt-6">
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Invia Richiesta
        </button>
      </div>
    </form>
  );
};

export default Contattaci;
