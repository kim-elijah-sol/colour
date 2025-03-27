import { TabSelect } from '@/components/inputs';
import { useState } from 'react';
import { Dashboard, LandingPage } from './Previews';
import * as style from './style.css';

function CreatePreview() {
  const [previewType, setPreviewType] = useState('landing');

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
          <TabSelect.Option value='landing'>Landing Page</TabSelect.Option>
          <TabSelect.Option value='dashboard'>Dashboard</TabSelect.Option>
        </TabSelect>
      </div>
      <div className={style.page}>
        {previewType === 'landing' && <LandingPage />}
        {previewType === 'dashboard' && <Dashboard />}
      </div>
    </div>
  );
}

export default CreatePreview;
