import {
  topGuideImageStyle,
  topGuideText1BackgroundStyle,
  topGuideText1HighlighterStyle,
  topGuideText1Style,
  topGuideTextContainerStyle,
} from './style.css';

import image from '@/assets/images/color-palette.png';

function TopGuideText() {
  return (
    <div className={topGuideTextContainerStyle}>
      <img src={image} className={topGuideImageStyle} alt='' />
      <div className={topGuideText1BackgroundStyle}>
        <h1 className={topGuideText1Style}>
          Try to Create Your Colour Palette!
        </h1>

        <div className={topGuideText1HighlighterStyle} />
      </div>
    </div>
  );
}

export default TopGuideText;
