import { margin, padding, styleToken } from '@/utils/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const topGuideTextContainerStyle = style({
  ...margin({ y: 40 }),
  ...padding({ x: 32 }),
  textAlign: 'center',
});

export const topGuideImageStyle = style({
  width: 64,
  ...margin({bottom: 24}),
});

export const topGuideText1BackgroundStyle = style({
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  backgroundColor: '#000',
  position: 'relative',
  overflow: 'hidden',
});

const highlighterKeyframe = keyframes({
  '0%': {
    left: 0,
  },
  '30%': {
    left: `calc(100% + 100px)`,
  },
  '100%': {
    left: `calc(100% + 100px)`,
  },
});

export const topGuideText1HighlighterStyle = style({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '40%',
  height: styleToken.full,
  background: `linear-gradient(
        135deg,
        rgba(255,255,255,0) 10%,
        rgba(255,255,255,.2) 30% ,
        rgba(255,255,255,.5) 60% ,
        rgba(255,255,255,.2) 90%,
        rgba(255,255,255,0))`,
  animation: `${highlighterKeyframe} 5s infinite`,
});

export const topGuideText1Style = style({
  textAlign: 'center',
  fontWeight: 600,
  lineHeight: '45px',
});
