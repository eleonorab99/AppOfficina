import React from 'react';
import AppointmentCalendar from '../components/Calendar/AppointmentCalendar';

const CalendarPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Gestione Appuntamenti
      </h1>
      <div className="h-[calc(100vh-200px)] md:h-[calc(100vh-220px)] mb-8">
        <AppointmentCalendar />
      </div>
    </div>
  );
};

export default CalendarPage;