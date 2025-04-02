import { TabSelect } from '@/components/inputs';
import { useState } from 'react';
import SubmitButton from '../SubmitButton';
import { Dashboard, Gradient } from './Previews';
import * as style from './style.css';

function CreateRight() {
  const [previewType, setPreviewType] = useState('dashboard');

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.topLeft}>
          <TabSelect
            className={style.tabSelect}
            value={previewType}
            onChange={setPreviewType}
            indicatorProps={{
              className: style.tabSelectIndicator,
            }}
          >
            <TabSelect.Option value='dashboard'>Dashboard</TabSelect.Option>
            <TabSelect.Option value='gradient'>Gradient</TabSelect.Option>
          </TabSelect>
        </div>
        <SubmitButton />
      </div>
      <div className={style.page}>
        {previewType === 'dashboard' && <Dashboard />}
        {previewType === 'gradient' && <Gradient />}
      </div>
    </div>
  );
}

export default CreateRight;
