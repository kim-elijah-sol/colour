import { LoaderPinwheel } from 'lucide-react';
import * as style from './style.css';

type Props = {
  color?: string;
  size?: number;
};

function Loader({ color = '#FFFFFF', size = 16 }: Props) {
  return <LoaderPinwheel className={style.loader} color={color} size={size} />;
}

export default Loader;
