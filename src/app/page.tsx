"use client"
import React from 'react';
import { createEvents } from 'ics'; 

export default function Page() {

  
  const handleButtonClick = () => {
    const events: any = [
      {
        start: [2024, 7, 4, 9, 0],
        duration: { hours: 8 },
        title: 'Ferdinand gibt mir 50€',
        description: 'Ein Beispiel für ein Ereignis',
        location: 'Online',
        url: 'http://beispiel.com',
        geo: { lat: 51.5074, lon: 0.1278 },
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        organizer: { name: 'Organisator Name', email: 'organisator@beispiel.com' },
        attendees: [
          { name: 'Teilnehmer 1', email: 'teilnehmer1@beispiel.com' },
          { name: 'Teilnehmer 2', email: 'teilnehmer2@beispiel.com' }
        ]
      },
      {
        start: [2024, 7, 5, 10, 0],
        duration: { hours: 2 },
        title: 'Test 123',
        description: 'Ein weiteres Beispiel für ein Ereignis',
        location: 'Online',
        url: 'http://beispiel.com',
        geo: { lat: 51.5074, lon: 0.1278 },
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        organizer: { name: 'Organisator Name', email: 'organisator@beispiel.com' },
        attendees: [
          { name: 'Teilnehmer 1', email: 'teilnehmer1@beispiel.com' },
          { name: 'Teilnehmer 2', email: 'teilnehmer2@beispiel.com' }
        ]
      }
    ];

    createEvents(events, (error, value) => {
      if (error) {
        console.error(error);
        return;
      }

      const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'termine.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
    
  };

  //https://meine-mensa.de/speiseplan_iframe

  return (
    <div className='flex justify-center items-center h-screen w-screen flex-col gap-2'> 
      <button className='bg-blue-300 p-2 border rounded-lg' onClick={handleButtonClick}>Termin hinzufügen</button>

      <iframe className='w-full h-full'
        src="https://eventec.vercel.app"
        title="Externer Inhalt" 
      ></iframe>
    </div>
  );
};
 