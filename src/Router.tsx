import { BrowserRouter, Routes, Route } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Index from '@/pages';
import Popular from '@/pages/popular';
import Create from '@/pages/create';

import Layout from '@/components/layouts/Layout';
import ModalProvider from '@/utils/components/Modal/ModalProvider';

import '@/styles/reset.css';

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
  );
}

export default Router;
