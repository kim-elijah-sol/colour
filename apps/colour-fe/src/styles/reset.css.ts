import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  fontFamily: 'Nunito',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  userSelect: 'none',
  color: vars.colour.text,
});

globalStyle('button, input, select, textarea', {
  appearance: 'none',
  border: 'none',
  outline: 'none',
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('html', {
  background: '#F9F9FA',
});
