import { axios } from '../../../lib/axios';
import { EventData } from '../types';

export const createEvent = (eventData:EventData) => axios.post('/event', eventData, {
  headers: {
    'Content-Type': 'application/json',
  },
});
