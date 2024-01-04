import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getEvents } from '../api/getEvents';
import { EventData } from '../types';

type Calendrical = 'month' | 'week' | 'day';

export const useGetEvents = (calendrical: Calendrical) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['get', 'events', calendrical],
    queryFn: () => getEvents(),
    initialData: () => {
      const eventsThisMonth = queryClient.getQueryData<EventData[]>(['events', 'month', 'now']);
      return eventsThisMonth;
    },
  });
};
