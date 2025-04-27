import Icons from '@/assets/icons';
import { copy } from '@/utils/functions';
import * as style from './style.css';

type Props = {
  colours: string[];
  isFavourite: boolean;
  favouriteCount: number;
  onClickFavourite?: React.MouseEventHandler<HTMLButtonElement>;
};

function PaletteCard({
  colours,
  isFavourite,
  favouriteCount,
  onClickFavourite,
}: Props) {
  return (
    <div className={style.card}>
      <div className={style.top}>
        {colours.map((it) => (
          <div
            className={style.colorItem}
            key={it}
            style={{ background: `#${it}` }}
          />
        ))}
      </div>
      <div className={style.bottom}>
        {colours.map((it) => (
          <button
            onClick={() => copy(it)}
            key={it}
            className={style.bottomButton}
          >
            <p className={style.bottomButtonText}>{it}</p>
          </button>
        ))}
      </div>
      <div className={style.divisionBar} />
      <div className={style.toolRow}>
        <button onClick={onClickFavourite} className={style.bottomButton}>
          {isFavourite ? (
            <Icons.Like.Fill size={16} />
          ) : (
            <Icons.Like size={16} />
          )}
          <p className={style.likeButtonText}>{favouriteCount}</p>
        </button>
      </div>
    </div>
  );
}

export default PaletteCard;
