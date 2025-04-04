import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';

import Index from '@/pages';
import Create from '@/pages/create';
import Popular from '@/pages/popular';
import Favourite from './pages/favourite';

import Layout from '@/components/layouts/Layout';

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
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Index />} />
              <Route path='/popular' element={<Popular />} />
              <Route path='/create' element={<Create />} />
              <Route path='/favourite' element={<Favourite />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default Router;
