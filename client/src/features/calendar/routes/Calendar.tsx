import { useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core';

import dayGridPLugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';

import { Modal } from '../components/Modal/Modal';

import { useEventDateStore } from '../../../hooks/useEventDateStore';

export const Calendar = () => {
  const [show, setShow] = useState(false);

  const updateStartDate = useEventDateStore((state) => state.updateEventStartDate);
  const updateEndDate = useEventDateStore((state) => state.updateEventEndDate);

  const handleClose = () => {
    setShow(false);
  };

  const handleEventClick = (value: EventClickArg) => {
    console.log(value);
  };

  // triggers when a duration is selected
  const handleSelect = (value: DateSelectArg) => {
    updateStartDate(value.start);
    updateEndDate(value.end);
    setShow(true);
  };

  return (
    <>
      <Modal
        show={show}
        handleClose={handleClose}
      />
      <FullCalendar
        plugins={[dayGridPLugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        views={{
          timeGridFourDay: {
            type: 'timeGrid',
            duration: { days: 4 },
          },
        }}
        editable
        selectable
        select={handleSelect}
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
        eventClick={handleEventClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth timeGridWeek timeGridFourDay',
        }}
      />
    </>
  );
};
