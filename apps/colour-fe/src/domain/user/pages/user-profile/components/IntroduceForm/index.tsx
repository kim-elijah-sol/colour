import userContentStyles from '@/domain/user/styles/user-content-styles.css';
import { useState } from 'react';
import * as style from './style.css';

function IntroduceForm() {
  const [introduce, setIntroduce] = useState('');

  return (
    <form className={userContentStyles.form}>
      <div className={style.textareaWrappr}>
        <textarea
          className={style.textarea}
          value={introduce}
          onChange={(e) => setIntroduce(e.target.value)}
        ></textarea>

        <p className={style.lengthCount}>{introduce.length}/300</p>
      </div>

      <button type='button' className={userContentStyles.button}>
        Save
      </button>
    </form>
  );
}

export default IntroduceForm;
