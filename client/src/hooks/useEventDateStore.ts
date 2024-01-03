import { create } from 'zustand';

export type EventState = {
  startDate: Date | string,
  endDate: Date | string,
};

type EventAction = {
  updateStartDate: (startDate: EventState['startDate']) => void,
  updateEndDate: (endDate: EventState['endDate']) => void,
};

export const useEventDateStore = create<EventState & EventAction>((set) => ({
  startDate: '',
  endDate: '',
  updateStartDate: (startDate) => set(() => ({ startDate })),
  updateEndDate: (endDate) => set(() => ({ endDate })),
}));
