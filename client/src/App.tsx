import { AppRoutes } from './routes';
import { AppProvider } from './providers/app';

export const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

export default App;
