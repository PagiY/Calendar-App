import { useMutation } from '@tanstack/react-query';
import { axios } from '../../../lib/axios';

type EventData = {
  eventTitle: string;
  eventStartDate: Date;
  eventEndDate: Date;
  allDay: boolean;
  eventDescription: string;
};

const createEvent = (eventData:EventData) => axios.post('/', {
  eventData,
}, {
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useCreateEvent = (eventData:EventData) => useMutation({
  mutationFn: () => createEvent(eventData),
});
