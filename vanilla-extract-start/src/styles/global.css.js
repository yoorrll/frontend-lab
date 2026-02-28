import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html,body', {
  margin: 0,
  padding: 0,
  fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif",
  background: 'aliceblue',
});

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

globalStyle('button, input, textarea', {
  fontFamily: 'inherit',
  cursor: 'pointer',
});
