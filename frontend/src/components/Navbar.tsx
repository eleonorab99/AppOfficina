import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo o nome del sito (opzionale) */}
        <div className="text-xl font-semibold text-gray-800">
        <img 
            src="logo.png"
            alt="Autofficina Gaglione Logo" 
            className="h-12 w-auto"
            onError={(e) => {
              console.error('Error loading logo');
              e.currentTarget.style.display = 'none';
            }}
          />

        </div>
        
        {/* Link di navigazione */}
        <div className="flex space-x-8">
          <a 
            href="#" 
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            Officina
          </a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            Servizi
          </a>
        <a 
            href="#" 
            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
          >
            Contattaci
          </a>
        </div>
        <button className='m-5 bg-amber-600 rounded-xl h-13 px-3'>Chiama Ora</button>

        </div>
    </nav>
  );
};

export default Navbar;