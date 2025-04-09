import { keyframes, style } from "@vanilla-extract/css";

const loaderKeyframes = keyframes({
    to: {
      transform: 'rotate(1turn)',
    },
  });
  
  export const loader = style({
    animation: `${loaderKeyframes} 1s infinite linear`,
  });
  