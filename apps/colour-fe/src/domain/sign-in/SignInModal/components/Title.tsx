import useSignInStore from '@/stores/useSignInStore';
import * as style from './style.css';

function Title() {
  const { submitType } = useSignInStore()

  return (
    <div className={style.titleWrapper}>
      <div
        className={style.rolling}
        style={{
          transform: `translateY(${submitType === 'sign-in' ? 0 : -38}px)`,
        }}
      >
        <p className={style.title}>Sign In</p>
        <p className={style.title}>Sign Up</p>
      </div>
    </div>
  );
}

export default Title;
