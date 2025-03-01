import Icons from '@/assets/icons';
import { copy } from '@/utils/functions';
import {
  colorCodeCopyButtonStyle,
  paletteCardBottomStyle,
  paletteCardColorBlockStyle,
  paletteCardLikeButtonStyle,
  paletteCardLikeCountStyle,
  paletteCardListStyle,
} from './style.css';

type Props = {
  colors: string[];
  isLike: boolean;
  likeCount: number;
  onClickLike?: React.MouseEventHandler<HTMLButtonElement>;
};

function PaletteCard({ colors, isLike, likeCount, onClickLike }: Props) {
  return (
    <div>
      <div className={paletteCardListStyle}>
        {colors.map((color) => (
          <div
            className={paletteCardColorBlockStyle}
            style={{ background: color }}
            key={color}
          >
            <p className={colorCodeCopyButtonStyle} onClick={() => copy(color)}>
              {color}
            </p>
          </div>
        ))}
      </div>

      <div className={paletteCardBottomStyle}>
        <button className={paletteCardLikeButtonStyle} onClick={onClickLike}>
          {isLike ? <Icons.Like.Fill /> : <Icons.Like />}
          <p className={paletteCardLikeCountStyle}>
            {likeCount.toLocaleString()}
          </p>
        </button>
      </div>
    </div>
  );
}

export default PaletteCard;
