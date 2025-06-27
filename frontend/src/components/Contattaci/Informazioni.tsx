import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Informazioni = () => {
  return (
    <div>
      {/* Box info contatti sotto la mappa */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-2">
        {/* CHIAMACI */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-lg font-semibold mb-2">CHIAMACI</div>
          <div className="flex items-center mb-2">
            <FaPhone className="text-orange-500 text-3xl mr-4" />
            <div>
              <div className="text-sm">
                Se desideri contattarci velocemente,
                <br />
                chiamaci:
              </div>
              <div className="font-bold text-orange-500 mt-1">
                <a href="tel:064744274" className="hover:underline">
                  06.474.4274
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-orange-500 text-3xl mr-4" />
            <div>
              <div className="text-sm">Oppure scrivici una mail:</div>
              <div className="font-bold text-orange-500 mt-1">
                <a
                  href="mailto:emanuelegaglione1995@gmail.com"
                  className="hover:underline"
                >
                  emanuelegaglione1995@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* DOVE SIAMO */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-lg font-semibold mb-2">DOVE SIAMO</div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="text-orange-500 text-3xl mr-4" />
            <div>
              <div>Via in Selci, 70/A</div>
              <div>00184 Roma</div>
              <a
                href="https://maps.google.com/maps?hl=it&q=Via%20in%20Selci,%2070/A%20Roma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline text-sm"
              >
                Guarda su Google Maps
              </a>
            </div>
          </div>
        </div>
        {/* I NOSTRI ORARI */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-lg font-semibold mb-2">I NOSTRI ORARI</div>
          <div className="flex items-center mb-2">
            <FaClock className="text-orange-500 text-3xl mr-4" />
            <div className="text-sm">
              Lunedì – Venerdì: <br /> 8.30 – 13.00 / 15.00 – 18.30
              <br />
              <span className="text-xs">L’appuntamento è sempre gradito.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Informazioni;
