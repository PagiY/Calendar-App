import { CalendarRoutes } from '../features/calendar/routes';

export const protectedRoutes = [
  {
    path: '/*',
    element: <CalendarRoutes />,
  },
];
