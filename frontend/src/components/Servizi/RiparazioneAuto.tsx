import React from "react";
import BarraInferiore from "../HomePage/BarraInferiore";

const RiparazioneAuto: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-6 px-2">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-10 tracking-wide">
          RIPARAZIONI AUTO
        </h1>
        {/* Grid responsive per box prenota e immagini */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-4 mb-8 md:mb-12">
          {/* Box Prenota */}
          <div className="bg-white border rounded-lg flex flex-col items-center justify-center p-6 md:p-8 shadow">
            <div className="mb-4">
              <svg width="56" height="56" fill="none" viewBox="0 0 64 64">
                <polygon
                  points="32,8 56,20 56,44 32,56 8,44 8,20"
                  fill="#eaf0fa"
                />
                <circle cx="32" cy="32" r="16" fill="#fff" />
                <path
                  d="M32 24v8l6 6"
                  stroke="#3b5ea3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="14"
                  stroke="#3b5ea3"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <h2 className="text-base md:text-lg font-semibold text-center mb-2 tracking-wide ">
              RICHIEDI
              <br />
              APPUNTAMENTO ONLINE
            </h2>
            <p className="text-gray-700 text-center mb-4 text-sm md:text-base">
              Chiamaci allo <br />
              <a href="tel:064744274" style={{ textDecoration: "none" }}>
                <b>06.474.4274</b>
              </a>{" "}
              o
              <br />
              compila la richiesta online.
            </p>
            <a
              href="/contattaci"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 md:px-6 rounded transition-colors text-sm md:text-base"
            >
              INVIA RICHIESTA
            </a>
          </div>
          {/* Immagine 1 */}
          <div>
            <img
              src="/img7.png"
              alt="Riparazione auto"
              className="rounded-lg object-cover w-full h-48 md:h-56"
            />
          </div>
          {/* Immagine 2 */}
          <div>
            <img
              src="/img3.jpg"
              alt="Officina"
              className="rounded-lg object-cover w-full h-48 md:h-56"
            />
          </div>
        </div>
        {/* Testo sotto TUTTE le immagini */}
        <div className="max-w-3xl mx-auto px-2 md:px-4 mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
            RIPARAZIONE AUTO
          </h2>
          <div className="w-12 md:w-16 h-1 bg-blue-700 mb-6" />
          <p className="mb-4 text-gray-700 text-sm md:text-base">
            Da Autofficina Gaglione trovate una completa assistenza per la vostra
            auto di qualsiasi marca.
          </p>
          <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-blue-700 mr-2 mt-1">✔</span>
              Diagnosi computerizzata e riparazione di tutti i sistemi del veicolo
            </li>
            <li className="flex items-start">
              <span className="text-blue-700 mr-2 mt-1">✔</span>
              Riparazione motore, cambio e trasmissione.
            </li>
            <li className="flex items-start">
              <span className="text-blue-700 mr-2 mt-1">✔</span>
              Sostituzione di componenti meccanici.
            </li>
          </ul>
        </div>
      </div>
      <BarraInferiore />
    </div>
  );
};

export default RiparazioneAuto;
