import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';

import UserLayout from '@/domain/user/components/UserLayout';
import UserAccount from '@/domain/user/pages/user-account';
import UserCancelAccount from '@/domain/user/pages/user-cancel';
import UserProfile from '@/domain/user/pages/user-profile';
import Index from '@/pages';
import Create from '@/pages/create';
import Favourite from '@/pages/favourite';
import Popular from '@/pages/popular';

import Layout from '@/components/layouts/Layout';
import ToastCenter from '@/components/Toast/ToastCenter';

import '@/styles/reset.css';
import { useEffect } from 'react';
import Studio from './pages/studio';
import { themeClass } from './styles/theme.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

function Router() {
  useEffect(() => {
    document.querySelector('html')?.classList.add(themeClass);
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Index />} />
              <Route path='popular' element={<Popular />} />
              <Route path='create' element={<Create />} />
              <Route path='favourite' element={<Favourite />} />
              <Route path='user' element={<UserLayout />}>
                <Route path='account' element={<UserAccount />} />
                <Route path='profile' element={<UserProfile />} />
                <Route path='cancel' element={<UserCancelAccount />} />
              </Route>
              <Route path='studio/:nickname' element={<Studio />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <ToastCenter />
    </>
  );
}

export default Router;
