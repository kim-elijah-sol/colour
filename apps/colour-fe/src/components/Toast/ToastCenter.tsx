import { useEffect, useState } from 'react';
import * as style from './style.css';
import ToastPortal from './ToastPortal';

type Toast = {
  id: number;
  text: string;
};

function ToastCenter() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    function handleAddToast(event: Event) {
      const {
        detail: { text },
      } = event as CustomEvent<{ text: string }>;

      const toast: Toast = {
        id: new Date().valueOf(),
        text,
      };

      setToasts((toasts) => toasts.concat(toast));

      setTimeout(() => {
        setToasts((toasts) => toasts.filter(({ id }) => id !== toast.id));
      }, 3000);
    }

    window.addEventListener('addToast', handleAddToast);
    return () => window.removeEventListener('addToast', handleAddToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <ToastPortal>
      {toasts.map((it) => (
        <div className={style.toast} key={it.id}>
          {it.text}
        </div>
      ))}
    </ToastPortal>
  );
}

export default ToastCenter;
