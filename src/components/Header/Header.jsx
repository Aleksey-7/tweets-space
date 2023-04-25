import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';

export const Header = () => {
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Navigation />
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
