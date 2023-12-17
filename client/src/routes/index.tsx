import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';

export const AppRoutes = () => {
  // const commonRoutes = [];
  const routes = useRoutes([...protectedRoutes]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { routes }
    </>
  );
};
