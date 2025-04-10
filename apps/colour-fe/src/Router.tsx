import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';

import Index from '@/pages';
import Create from '@/pages/create';
import Popular from '@/pages/popular';
import Favourite from './pages/favourite';

import Layout from '@/components/layouts/Layout';
import ToastCenter from '@/components/Toast/ToastCenter';

import '@/styles/reset.css';
import { useEffect } from 'react';
import UserAccountLayout from './domain/user-account/components/UserAccountLayout';
import UserAccount from './domain/user-account/pages/user-account';
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
              <Route path='user'>
                <Route path='account' element={<UserAccountLayout />}>
                  <Route index element={<UserAccount />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <ToastCenter />
    </>
  );
}

export default Router;
