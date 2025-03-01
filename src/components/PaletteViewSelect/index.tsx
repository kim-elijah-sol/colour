import usePaletteView, { PaletteViewType } from '@/stores/usePaletteView';
import React from 'react';
import {
  paletteViewSelectStyle,
  paletteViewSelectWrapperStyle,
} from './style.css';

function PaletteViewSelect() {
  const { type, setType } = usePaletteView();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setType(e.target.id as PaletteViewType);
  }

  return (
    <div className={paletteViewSelectWrapperStyle}>
      <label htmlFor='vertical' className={paletteViewSelectStyle}>
        <input
          type='radio'
          name='palette-view'
          id='vertical'
          onChange={handleChange}
          checked={type === 'vertical'}
        />
        
      </label>
      <label htmlFor='horizontal' className={paletteViewSelectStyle}>
        <input
          type='radio'
          name='palette-view'
          id='horizontal'
          onChange={handleChange}
          checked={type === 'horizontal'}
        />
      </label>
    </div>
  );
}

export default PaletteViewSelect;
