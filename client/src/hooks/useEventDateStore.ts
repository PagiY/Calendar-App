import { create } from 'zustand';

export type EventState = {
  eventStartDate: Date | string,
  eventEndDate: Date | string,
};

type EventAction = {
  updateEventStartDate: (eventStartDate: EventState['eventStartDate']) => void,
  updateEventEndDate: (eventEndDate: EventState['eventEndDate']) => void,
};

export const useEventDateStore = create<EventState & EventAction>((set) => ({
  eventStartDate: '',
  eventEndDate: '',
  updateEventStartDate: (eventStartDate) => set(() => ({ eventStartDate })),
  updateEventEndDate: (eventEndDate) => set(() => ({ eventEndDate })),
}));
