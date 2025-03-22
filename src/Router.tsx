import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';

import Index from '@/pages';
import Create from '@/pages/create';
import Popular from '@/pages/popular';

import Layout from '@/components/layouts/Layout';
import ModalProvider from '@/utils/components/Modal/ModalProvider';

import '@/styles/reset.css';
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
  return (
    <div className={themeClass}>
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Index />} />
                <Route path='/popular' element={<Popular />} />
                <Route path='/create' element={<Create />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ModalProvider>
    </div>
  );
}

export default Router;
