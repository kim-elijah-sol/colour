import { getForegroundColourType, getShades } from '@/utils/functions';
import { useMemo } from 'react';
import * as style from './style.css';

type Props = {
  colour: string;
  nickname: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function Avatar({ colour, nickname, onClick }: Props) {
  const isForLight = getForegroundColourType(colour) === 'black';

  const nicknameColour = useMemo(() => {
    const shades = getShades(colour);

    const indexInShades = shades.indexOf(colour);

    let index = indexInShades + 5;

    if (index >= 10) {
      index -= 10;
    }

    return shades[index];
  }, [colour]);

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: `#${colour}`,
      }}
      className={style.profile[isForLight ? 'forLight' : 'default']}
    >
      {nickname !== '' && (
        <span
          className={style.nickname}
          style={{
            color: `#${nicknameColour}`,
          }}
        >
          {nickname[0].toUpperCase()}
        </span>
      )}
    </div>
  );
}

export default Avatar;
