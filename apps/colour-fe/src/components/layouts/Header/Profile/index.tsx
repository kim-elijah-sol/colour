import { useGetMeQuery } from '@/queries/useGetMeQuery';
import { getForegroundColorType } from '@/utils/functions';
import * as style from './style.css';

function Profile() {
  const { data } = useGetMeQuery();

  const color = data ? data.data.profileColour : 'FFFFFF';

  const isForLight = getForegroundColorType(color) === 'black';

  return (
    <div
      style={{
        backgroundColor: `#${color}`,
      }}
      className={style.profile[isForLight ? 'forLight' : 'default']}
    ></div>
  );
}

export default Profile;
