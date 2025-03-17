import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  fontFamily: 'Open Sans',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  userSelect: 'none',
  color: '#000',
});

globalStyle('button, input, select, textarea', {
  appearance: 'none',
  border: 'none',
  outline: 'none',
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
