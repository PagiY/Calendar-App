import { useState } from 'react';
import { EventData } from '../types';

export const useEventsData = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  return { events, setEvents };
};
