import React from "react";
import { useNavigate } from "react-router-dom";
import BarraInferiore from "../HomePage/BarraInferiore";

const servizi = [
  {
    nome: "RIPARAZIONE AUTO",
    img: "/img1.jpg",
    link: "/servizi/riparazioni-auto",
  },
  {
    nome: "TAGLIANDO AUTO",
    img: "/tagliando.jpg",
    link: "/servizi/tagliando-auto",
  },
  {
    nome: "ELETTRAUTO",
    img: "/elettrauto.jpg",
    link: "/servizi/elettrauto",
  },
  {
    nome: "CARROZZERIA",
    img: "/carrozzeria.jpg",
    link: "/servizi/carrozzeria",
  },
  {
    nome: "RICARICA ARIA CONDIZIONATA",
    img: "/ariacondizionata.jpg",
    link: "/servizi/aria-condizionata",
  },
  {
    nome: "MAPPATURA CENTRALINE",
    img: "/mappatura.jpg",
    link: "/servizi/mappatura-centraline",
  },
];

const Servizi: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-10">
        SERVIZI
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {servizi.map((servizio, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-orange-300 transition-shadow cursor-pointer flex flex-col"
            onClick={() => navigate(servizio.link)}
          >
            <img
              src={servizio.img}
              alt={servizio.nome}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-semibold text-gray-800">
                {servizio.nome}
              </span>
              <span className="text-2xl text-orange-500">&gt;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <BarraInferiore />
    </div>
  );
};

export default Servizi;
