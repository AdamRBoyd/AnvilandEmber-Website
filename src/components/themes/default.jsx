// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer';

const theme = {};

theme.palette = {
  primary: ['#b87333', '#d18238', '#f8b576', '#fccea2'],
  secondary: ['#b8860b', '#daa520', '#d4af37', '#c5b358'],
  danger: [
    '#3b0a06',
    '#7d1009',
    '#b1180d',
    '#c90d00',
    '#d32f2f',
    '#ffcdd2',
    '#ffdddd',
  ],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff'],
  black: ['#000'],
  grayscale: [
    '#212121', // 0
    '#414141', // 1
    '#616161', // 2
    '#9e9e9e', // 3
    '#bdbdbd', // 4
    '#e0e0e0', // 5
    '#eeeeee', // 6
    '#f5f5f5', // 7
  ],
  overlayBlack: ['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.6)'],
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
};

theme.sizes = {
  maxWidth: '1100px',
};

export default theme;
