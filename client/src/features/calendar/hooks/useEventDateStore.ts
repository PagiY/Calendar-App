import { create } from 'zustand';

export type EventState = {
  start: Date | string,
  end: Date | string,
};

type EventAction = {
  updateStartDate: (start: EventState['start']) => void,
  updateEndDate: (end: EventState['end']) => void,
};

export const useEventDateStore = create<EventState & EventAction>((set) => ({
  start: '',
  end: '',
  updateStartDate: (start) => set(() => ({ start })),
  updateEndDate: (end) => set(() => ({ end })),
}));
