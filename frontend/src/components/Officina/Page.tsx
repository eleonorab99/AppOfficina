import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import OfficinaCard from "./Card";
import BarraInferiore from "../HomePage/BarraInferiore";

const OfficinaPage: React.FC = () => {
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0);
  const backgrounds: string[] = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages: string[] = ["/img3.jpg", "/img4.jpg", "/img6.jpg" , "/img7.jpg", "/img8.jpg", "/img9.jpg", "/img10.jpg", "/img11.jpg", "/img12.jpg", "/img13.jpg"];

  // Dati dinamici per le card
  const storiaCards = [
    {
      title: "Le Nostre Origini",
      subheader: "Dal 1948 a oggi",
      image: "img22.jpg",
      alt: "Le origini dell'officina",
      description: "L’Autofficina Giovanni Gaglione nasce nel 1948 a Roma, in Via in Selci 70/A, dalla passione per i motori e dal desiderio di offrire servizi affidabili e di qualità nel settore automobilistico.",
      expandedContent: (
        <>Fondata da esperti meccanici con anni di esperienza, l'officina ha sempre puntato sull'innovazione e sulla formazione continua del personale per garantire interventi all'avanguardia su ogni tipo di veicolo.</>
      ),
    },
    {
      title: "Esperienza e Professionalità",
      subheader: "Il nostro team",
      image: "padrelele.jpg",
      alt: "Team di professionisti",
      description: "L’Autofficina Gaglione è una realtà a conduzione familiare, gestita con passione da padre e figlio.",
      expandedContent: (
        <>
          Unendo l’esperienza maturata in decenni di lavoro alla voglia di innovare delle nuove generazioni, offriamo un servizio che affonda le radici nella tradizione ma guarda sempre avanti.
          La nostra forza sta nel rapporto diretto con il cliente, nella cura artigianale di ogni intervento e nell’impegno costante a garantire qualità e affidabilità.
        </>
      ),
    },
    {
      title: "Tecnologia e Innovazione",
      subheader: "Strumenti all'avanguardia",
      image: "/video1.mp4", // Usa il path corretto del tuo video
      alt: "Tecnologia avanzata",
      description: "Utilizziamo strumenti e sistemi diagnostici di ultima generazione, per individuare con precisione guasti e anomalie.",
      expandedContent: (
        <>La nostra officina è dotata delle più moderne attrezzature per la diagnosi e la riparazione di veicoli di ogni marca e modello, garantendo interventi rapidi e precisi che rispettano gli standard delle case produttrici.</>
      ),
    },
  ];

  const serviziCards = [
    {
      title: "Meccanica Generale",
      subheader: "Per ogni veicolo",
      image: "/video2.mp4", // Usa il path corretto del tuo secondo video
      alt: "Meccanica generale",
      description: "Offriamo servizi completi di meccanica generale per tutti i tipi di veicoli, dalle auto alle moto, dai veicoli commerciali ai monopattini elettrici.",
      expandedContent: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Tagliandi e manutenzione programmata</li>
          <li>Riparazione e sostituzione freni</li>
          <li>Sostituzione cinghie di distribuzione</li>
          <li>Riparazione e sostituzione frizioni</li>
          <li>Diagnosi e riparazione sospensioni</li>
        </ul>
      ),
    },
    {
      title: "Elettrauto",
      subheader: "Diagnosi e riparazione",
      image: "batteria.jpg",
      alt: "Servizi elettrauto",
      description: "Specializzati nella diagnosi e riparazione di tutti i sistemi elettrici ed elettronici del vostro veicolo.",
      expandedContent: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Diagnosi computerizzata</li>
          <li>Riparazione impianti elettrici</li>
          <li>Installazione accessori elettronici</li>
          <li>Ricarica e sostituzione batterie</li>
          <li>Riparazione sistemi di climatizzazione</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <main className="min-h-screen relative font-sans bg-gray-50">
        {/* Sfondo dinamico */}
        <div
          className="fixed inset-0 z-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgrounds[backgroundIndex]})`,
            opacity: 0.18,
          }}
        />

        {/* Contenuto */}
        <div className="relative z-10 p-4 pt-12 container mx-auto max-w-6xl">
          {/* Titolo e intro */}
          <header className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-orange-600 drop-shadow-lg tracking-tight">
              Autofficina <span className="text-orange-600 -black">Gaglione</span>
            </h1>
            <div className="text-lg md:text-xl font-semibold text-black mb-2 tracking-wide">
              Dal <span className="font-bold text-black">1948</span>
            </div>
            <p className="text-center text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-2">
              La nostra officina a Roma è sinonimo di affidabilità, innovazione, passione per i motori e tradizione familiare. Scopri la nostra storia e i servizi che offriamo per prenderti cura della tua auto.
            </p>
          </header>

          {/* Sezione Storia */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 border-b-2 border-orange-300 pb-2 inline-block mx-auto">
              La Nostra Storia
            </h2>
            <div className="flex flex-col gap-16 w-full">
              {storiaCards.map((card, idx) => (
                <OfficinaCard key={card.title} {...card} reverse={idx % 2 === 1} />
              ))}
            </div>
          </section>

          {/* Sezione Servizi */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 border-b-2 border-orange-300 pb-2 inline-block mx-auto">
              I Nostri Servizi
            </h2>
            <div className="flex flex-col gap-16 w-full">
              {serviziCards.map((card, idx) => (
                <OfficinaCard key={card.title} {...card} reverse={idx % 2 === 1} />
              ))}
            </div>
          </section>

          {/* Sezione Galleria */}
          <section className="mb-20 backdrop-blur-md bg-white/70 rounded-2xl p-8 shadow-xl border border-orange-100">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 border-b-2 border-orange-300 pb-2 inline-block mx-auto">
              Galleria
            </h2>
            <Gallery images={galleryImages} />
          </section>
        </div>
      </main>
      {/* Barra inferiore SEMPRE fuori dal main */}
      <div className="relative z-20 bg-gradient-to-r from-black to-orange-500 py-0.5">
        <BarraInferiore />
      </div>
    </>
  );
};

export default OfficinaPage;
