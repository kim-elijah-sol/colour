import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

async function enableMocking() {
  const { worker } = await import('../server/browsers');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('colour')!).render(<Router />);
});
