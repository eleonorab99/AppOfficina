
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sezione con immagine di sfondo e testo sovrapposto */}
      <div
        className="flex-1 bg-cover bg-center flex items-center h-10 "
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
          <button className="bg-white border border-orange-400 text- px-6 py-2 rounded hover:bg-orange-300">
            Contattaci
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <p className="ml-10 font-extrabold font-sans text-3xl text-orange-400">
          Orari di Apertura:
        </p>
        <p>Al tuo servizio dal 1948</p>

      </div>

    </div>
  );
};

export default HomePage;
