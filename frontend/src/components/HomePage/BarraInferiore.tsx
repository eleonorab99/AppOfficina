const BarraInferiore = () => {
  return (
    <div className="bg-gradient-to-r from-black to-orange-500 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-3 gap-x-4">
          {/* Sezione SEDE - Allineata a sinistra */}
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">SEDE</h2>
            <div className="space-y-1">
              <p>Via in Selci, 70A</p>
              <p>00184 ROMA (RM)</p>
              <p className="text-sm">P.I. </p>
            </div>
          </div>

          {/* Logo centrale */}
          <div className="flex justify-center items-center">
            <img
              src="/logo.png"
              alt="Autofficina Gaglione Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Sezione CONTATTI - Allineata a destra */}
          <div className="text-white flex flex-col items-end">
            <h2 className="text-2xl font-bold mb-4">CONTATTI</h2>
            <p className="mb-2">06 474 4274</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/gaglionegio?locale=it_IT"
                className="hover:text-orange-300 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/autofficinagaglione/"
                className="hover:text-orange-300 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraInferiore;
