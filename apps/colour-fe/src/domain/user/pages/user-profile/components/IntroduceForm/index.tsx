import Loader from '@/components/Loader';
import userContentStyles from '@/domain/user/styles/user-content-styles.css';
import useIntroduceForm from '../../hooks/useIntroduceForm';
import * as style from './style.css';

function IntroduceForm() {
  const {
    introduce,
    handleChangeIntroduce,
    handleSubmit,
    isDisabled,
    isPending,
  } = useIntroduceForm();

  return (
    <form className={userContentStyles.form} onSubmit={handleSubmit}>
      <div className={style.textareaWrappr}>
        <textarea
          className={style.textarea}
          value={introduce}
          onChange={handleChangeIntroduce}
          maxLength={300}
        ></textarea>

        <p className={style.lengthCount}>{introduce.length}/300</p>
      </div>

      <button
        type='submit'
        className={userContentStyles.button}
        disabled={isDisabled}
      >
        {!isPending ? 'Save' : <Loader size={20} />}
      </button>
    </form>
  );
}

export default IntroduceForm;
