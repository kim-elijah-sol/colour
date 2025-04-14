import { LoaderPinwheel } from 'lucide-react';
import * as style from './style.css';

type Props = {
  colour?: string;
  size?: number;
};

function Loader({ colour = '#FFFFFF', size = 16 }: Props) {
  return <LoaderPinwheel className={style.loader} color={colour} size={size} />;
}

export default Loader;
