import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import BarraInferiore from "./BarraInferiore";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sezione con immagine di sfondo e testo sovrapposto */}
      <div
        className="w-full bg-cover bg-center flex items-center h-[800px]" // rimosso flex-1, aumentato h-[800px]
        style={{ backgroundImage: "url('/img2.jpg')" }}
      >
        <div className="max-w-3xl mx-auto p-6 bg-opacity-50 text-orange-400 text-shadow-lg">
          <h1 className="text-4xl font-bold leading-tight mb-6">
            L'esperto che la
            <br />
            tua auto
            <br />
            merita, per ogni situazione.
          </h1>
          <Link
            to="/contattaci"
            className="bg-white border border-orange-400 px-6 py-2 rounded hover:bg-orange-300 inline-block transition-colors"
          >
            Contattaci
          </Link>
        </div>
      </div>

      {/* Sezione orari e anni di servizio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-8 bg-gray-50">
        <div className="flex flex-col">
          <h2 className="font-extrabold text-3xl text-orange-400 mb-6">
            Orari di Apertura
          </h2>
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-gray-800 font-medium whitespace-nowrap">
                Lunedì - Venerdì:
              </span>
              <span className="text-gray-600">
                8:30 - 13:00 / 15:00 - 18:30
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-center p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400 shadow-md">
          <span className="text-xl font-medium text-gray-700">
            Al tuo servizio
          </span>
          <span className="text-gray-600 font-medium mb-1">Dal</span>
          <span className="text-4xl font-bold text-orange-400 mb-1">1948</span>
        </div>
      </div>
      {/* Reviews section */}
      <div className="mt-10">
        <Reviews />
      </div>
      <BarraInferiore />
    </div>
  );
};

export default HomePage;
