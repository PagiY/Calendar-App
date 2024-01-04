import { EventState } from '../hooks/useEventDateStore';

export interface EventData extends EventState {
  title: string,
  allDay: boolean,
  description?: string,
}
