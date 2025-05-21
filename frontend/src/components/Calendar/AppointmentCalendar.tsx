import React, { useState, useEffect, useCallback, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import itLocale from '@fullcalendar/core/locales/it';
import { EventClickArg } from '@fullcalendar/core';
import axios from 'axios';
import './CalendarStyles.css'; // Importa gli stili personalizzati
import { Appointment, AppointmentData } from '../../types/CalendarTypes';

const AppointmentCalendar: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Appointment | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await axios.get<AppointmentData[]>(`${process.env.REACT_APP_API_URL}/api/appuntamenti`);
      
      // Trasforma i dati per FullCalendar
      const formattedAppointments = response.data.map((appointment: AppointmentData) => ({
        id: appointment.id,
        title: `${appointment.cliente.nome} ${appointment.cliente.cognome} - ${appointment.servizio.nome}`,
        start: new Date(appointment.data).toISOString().split('T')[0] + 'T' + new Date(appointment.ora).toISOString().split('T')[1],
        end: calculateEndTime(new Date(appointment.data).toISOString().split('T')[0] + 'T' + new Date(appointment.ora).toISOString().split('T')[1], appointment.durata),
        backgroundColor: getStatusColor(appointment.stato),
        borderColor: getStatusColor(appointment.stato),
        extendedProps: {
          cliente: appointment.cliente,
          servizio: appointment.servizio,
          note: appointment.note,
          stato: appointment.stato
        }
      }));
      
      setAppointments(formattedAppointments);
      setError(null);
    } catch (err) {
      console.error('Errore nel recupero degli appuntamenti:', err);
      setError('Impossibile caricare gli appuntamenti. Riprova più tardi.');
    } finally {
      setLoading(false);
    }
  };

  const calculateEndTime = (startTime: string, durationMinutes: number) => {
    const date = new Date(startTime);
    date.setMinutes(date.getMinutes() + durationMinutes);
    return date.toISOString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFERMATO':
        return '#4285F4'; // Blu
      case 'IN_CORSO':
        return '#FBBC05'; // Giallo
      case 'COMPLETATO':
        return '#34A853'; // Verde
      case 'CANCELLATO':
        return '#EA4335'; // Rosso
      default:
        return '#9E9E9E'; // Grigio
    }
  };

  const handleEventClick = (info: EventClickArg) => {
    setSelectedEvent(info.event as unknown as Appointment);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedEvent(null);
  };

  const handleUpdateStatus = async (newStatus: string) => {
    if (!selectedEvent) return;
    
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/appuntamenti/${selectedEvent.id}/stato`, {
        stato: newStatus
      });
      
      // Aggiorna la lista degli appuntamenti
      fetchAppointments();
      handleCloseModal();
    } catch (err) {
      console.error('Errore nell\'aggiornamento dello stato:', err);
      setError('Impossibile aggiornare lo stato dell\'appuntamento.');
    }
  };

  // Aggiungiamo una funzione per gestire il resize della finestra
  const handleResize = useCallback(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      if (window.innerWidth < 768 && calendarApi.view.type === 'dayGridMonth') {
        calendarApi.changeView('listWeek');
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4 md:p-6 h-full flex flex-col">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Calendario Appuntamenti
      </h2>
      
      {error && (
        <p className="text-red-600 mb-4">
          {error}
        </p>
      )}
      
      {loading ? (
        <div className="flex justify-center p-6">
          <p className="text-gray-600">Caricamento appuntamenti...</p>
        </div>
      ) : (
        <div className="calendar-container flex-1">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            initialView={window.innerWidth < 768 ? "listWeek" : "dayGridMonth"}
            headerToolbar={{
              left: window.innerWidth < 768 ? 'prev,next' : 'prev,next today',
              center: 'title',
              right: window.innerWidth < 768 ? 'dayGridMonth,listWeek,timeGridDay' : 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            locale={itLocale}
            events={appointments}
            eventClick={handleEventClick}
            height="100%"
            buttonText={{
              today: 'oggi',
              month: 'mese',
              week: 'settimana',
              day: 'giorno',
              list: 'lista'
            }}
            loading={isLoading => {
              setLoading(isLoading);
            }}
            stickyHeaderDates={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            navLinks={true}
            nowIndicator={true}
            editable={false}
            viewDidMount={(viewInfo) => {
              // Aggiorna la vista in base alla dimensione dello schermo
              if (window.innerWidth < 768 && viewInfo.view.type === 'dayGridMonth') {
                const calendarApi = viewInfo.view.calendar;
                calendarApi.changeView('listWeek');
              }
            }}
            views={{
              dayGridMonth: {
                dayMaxEventRows: window.innerWidth < 768 ? 2 : 3,
              },
              timeGrid: {
                dayMaxEventRows: window.innerWidth < 768 ? 2 : 3,
              }
            }}
          />
        </div>
      )}
      
      {/* Modal per i dettagli dell'appuntamento */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-auto">
            <div className="p-4 sm:p-6">
              {selectedEvent && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Dettagli Appuntamento
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-gray-800">
                        <span className="font-semibold">Cliente:</span> {selectedEvent.extendedProps.cliente.nome} {selectedEvent.extendedProps.cliente.cognome}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">
                        <span className="font-semibold">Servizio:</span> {selectedEvent.extendedProps.servizio.nome}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">
                        <span className="font-semibold">Data:</span> {new Date(selectedEvent.start).toLocaleDateString('it-IT')}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">
                        <span className="font-semibold">Ora:</span> {new Date(selectedEvent.start).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">
                        <span className="font-semibold">Stato:</span> {selectedEvent.extendedProps.stato}
                      </p>
                    </div>
                    {selectedEvent.extendedProps.note && (
                      <div>
                        <p className="text-gray-800">
                          <span className="font-semibold">Note:</span> {selectedEvent.extendedProps.note}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Aggiorna Stato
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm"
                      onClick={() => handleUpdateStatus('CONFERMATO')}
                    >
                      Conferma
                    </button>
                    <button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded text-sm"
                      onClick={() => handleUpdateStatus('IN_CORSO')}
                    >
                      In Corso
                    </button>
                    <button 
                      className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm"
                      onClick={() => handleUpdateStatus('COMPLETATO')}
                    >
                      Completato
                    </button>
                    <button 
                      className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm"
                      onClick={() => handleUpdateStatus('CANCELLATO')}
                    >
                      Cancella
                    </button>
                  </div>
                  
                  <div className="mt-6 text-right">
                    <button 
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                      onClick={handleCloseModal}
                    >
                      Chiudi
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentCalendar;