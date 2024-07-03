"use client"
import React from 'react';
import { createEvent } from 'ics';
import { saveAs } from 'file-saver';

export default function Page() {
  const handleButtonClick = () => {
    const event: any = {
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
    };

    createEvent(event, (error, value) => {
      if (error) {
        console.log(error);
        return;
      }

      const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
      saveAs(blob, 'termin.ics');
    });
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen flex-col gap-2'> 
      <button className='bg-blue-300 p-2 border rounded-lg' onClick={handleButtonClick}>Termin hinzufügen</button>
    </div>
  );
};
 