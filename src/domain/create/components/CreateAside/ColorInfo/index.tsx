import * as style from './style.css';

type Props = {
  label: string;
  value: string;
};

function ColorInfo({ label, value }: Props) {
  return (
    <div>
      <p className={style.label}>{label}</p>
      <p className={style.value}>{value}</p>
    </div>
  );
}

export default ColorInfo;
