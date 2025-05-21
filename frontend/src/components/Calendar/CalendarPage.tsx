import React from 'react';
import AppointmentCalendar from '../Calendar/AppointmentCalendar';

const CalendarPage: React.FC = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 md:py-8 h-[calc(100vh-64px)]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
        Gestione Appuntamenti
      </h1>
      <div className="h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)]">
        <AppointmentCalendar />
      </div>
    </div>
  );
};

export default CalendarPage;