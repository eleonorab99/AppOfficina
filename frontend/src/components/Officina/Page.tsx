import React from "react";
import OfficinaCard from "./Card";

const OfficinaPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 mt-4">
            <h1 className="text-3xl font-bold text-center mb-8">Officina</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <OfficinaCard
                    subheader="Descrizione del servizio 1"
                    image="/img3.jpg"
                    alt="Servizio 1"
                    description="Motore Auto."
                />
                <OfficinaCard
                    subheader="Descrizione del servizio 2"
                    image="/img4.jpg"
                    alt="Servizio 2"
                    description=""
                />
                <OfficinaCard
                    subheader="Descrizione del servizio 3"
                    image="/img5.jpg"
                    alt="Servizio 3"
                    description="Sanificazione Auto"
                />
                <OfficinaCard
                    subheader="Descrizione del servizio 2"
                    image="/img6.png"
                    alt="Servizio 2"
                    description=""
                />
                <OfficinaCard
                    subheader="Descrizione del servizio 3"
                    image="/img7.png"
                    alt="Servizio 3"
                    description="Sanificazione Auto"
                />
            </div>
        </div>
    )
};
export default OfficinaPage;
