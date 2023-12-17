import { Route, Routes } from 'react-router-dom';
import { Calendar } from './Calendar';

export const CalendarRoutes = () => (
  <Routes>
    <Route path="" element={<Calendar />} />
  </Routes>
);
