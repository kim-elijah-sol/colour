import PaletteViewSelect from '@/components/PaletteViewSelect';
import NewPaletteList from '@/domain/new/components/NewPaletteList';
import { Suspense } from 'react';

function Index() {
  return (
    <>
      <div>
        <PaletteViewSelect />
      </div>
      <Suspense fallback={<></>}>
        <NewPaletteList />
      </Suspense>
    </>
  );
}

export default Index;
