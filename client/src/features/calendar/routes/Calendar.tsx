import { useEffect, useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core';

import dayGridPLugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';
import { useMutation } from '@tanstack/react-query';

import { Modal } from '../components/Modal/Modal';

import { useEventDateStore } from '../hooks/useEventDateStore';
import { useGetEvents } from '../hooks/useGetEvents';
import { useEventsData } from '../hooks/useEventsData';

import { createEvent as createEventAPI } from '../api/createEvent';
import { EventData } from '../types';

export const Calendar = () => {
  const [show, setShow] = useState(false);

  const { events, setEvents } = useEventsData();
  // initialize events for the current month
  const getEvents = useGetEvents('month');

  // initialize events
  useEffect(() => {
    setEvents(getEvents.data);
  }, [getEvents]);

  const updatestartTime = useEventDateStore((state) => state.updateStartDate);
  const updateendTime = useEventDateStore((state) => state.updateEndDate);

  const createEvent = useMutation({
    mutationKey: ['create', 'event'],
    mutationFn: (event: EventData) => createEventAPI(event),
    onSuccess: () => {
      getEvents.refetch();
    },
  });

  const handleClose = () => {
    setShow(false);
  };

  const handleEventClick = (value: EventClickArg) => {
    console.log(value);
  };

  // triggers when a duration is selected
  const handleSelect = (value: DateSelectArg) => {
    updatestartTime(value.start);
    updateendTime(value.end);
    setShow(true);
  };

  return (
    <>
      <Modal
        show={show}
        handleClose={handleClose}
        createEvent={createEvent}
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
        events={events}
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
