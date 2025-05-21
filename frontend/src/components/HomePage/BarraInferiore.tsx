
const BarraInferiore = () => {
    return (
        <div className="bg-gradient-to-r from-black from-10% via-orange-400 via-30% to-white to-100% h-64 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center py-4">
                <h2 className="text-white text-2xl font-bold mb-2">Contattaci</h2>
                <p className="text-gray-300 mb-4">Per qualsiasi informazione, non esitare a contattarci!</p>
                <a href="/contattaci" className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-300">
                    Contattaci
                </a>
            </div>
        </div>
    )
}
export default BarraInferiore;