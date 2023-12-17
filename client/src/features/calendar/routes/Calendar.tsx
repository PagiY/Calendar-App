import FullCalendar from '@fullcalendar/react';
import dayGridPLugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';

import { Modal } from '../components/Modal/Modal';

export const Calendar = () => {
  const handleDateClick = (arg) => {
    console.log(arg);
  };

  return (
    <>
      <Modal show />
      <FullCalendar
        plugins={[dayGridPLugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        editable
        selectable
        events={[
          { // this object will be "parsed" into an Event Object
            title: 'The Title', // a property!
            start: '2023-12-01T12:30:00', // a property!
            end: '2023-12-01T12:45:00', // a property! ** see important note below about 'end' **
            startTime: '2023-12-01T12:30:00',
            endTime: '2023-12-01T12:45:00',
            allDay: false,
          },
        ]}
        dateClick={handleDateClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth timeGridWeek timeGridDay',
        }}
      />
    </>
  );
};
