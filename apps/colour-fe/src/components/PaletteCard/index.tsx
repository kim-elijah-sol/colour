import Icons from '@/assets/icons';
import { copy, getForegroundColourType } from '@/utils/functions';
import { Link } from 'react-router';
import toast from '../Toast/toast';
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
  function getOpenInCreateTextColor(hex: string) {
    return getForegroundColourType(hex) === 'white' ? '#FFFFFF' : '#333333';
  }

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
        <Link
          to={`/create?c=${colours.join(',')}`}
          className={style.goCreate}
          style={{
            background: `linear-gradient(to right, ${colours
              .map((it) => `#${it}`)
              .join(', ')})`,
          }}
        >
          <p
            className={style.openInCreateText}
            style={{
              background: `linear-gradient(to right, ${getOpenInCreateTextColor(
                colours[1]
              )}, ${getOpenInCreateTextColor(colours[2])})`,
            }}
          >
            Open in Create
          </p>
        </Link>
      </div>
      <div className={style.bottom}>
        {colours.map((it) => (
          <button
            onClick={() => {
              copy(it);
              toast.open(`"${it}" is copied!`);
            }}
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
