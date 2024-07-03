"use client"
import React from 'react';
import { createEvent } from 'ics'; 

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

    const startDate = new Date(2024, 6, 4, 9, 0); // Beachte: Monat ist nullbasiert, 6 ist Juli
    const endDate = new Date(2024, 6, 4, 17, 0);

    const startDateTime = startDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
    const endDateTime = endDate.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const title = encodeURIComponent("Neues Ereignis");
    const description = encodeURIComponent("Ein Beispiel für ein Ereignis");
    const location = encodeURIComponent("Online");

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateTime}/${endDateTime}&details=${description}&location=${location}`;

    window.open(googleCalendarUrl, "_blank");
    
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen flex-col gap-2'> 
      <button className='bg-blue-300 p-2 border rounded-lg' onClick={handleButtonClick}>Termin hinzufügen</button>
    </div>
  );
};
 