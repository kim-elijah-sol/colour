const toast = {
  open: (text: string) => {
    const event = new CustomEvent('addToast', { detail: { text } });
    window.dispatchEvent(event);
  },
};

export default toast;
