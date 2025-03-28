import { TabSelect } from '@/components/inputs';
import { useState } from 'react';
import { Dashboard } from './Previews';
import Gradient from './Previews/Gradient';
import * as style from './style.css';

function CreatePreview() {
  const [previewType, setPreviewType] = useState('dashboard');

  return (
    <div className={style.container}>
      <div className={style.top}>
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
      <div className={style.page}>
        {previewType === 'dashboard' && <Dashboard />}
        {previewType === 'gradient' && <Gradient />}
      </div>
    </div>
  );
}

export default CreatePreview;
