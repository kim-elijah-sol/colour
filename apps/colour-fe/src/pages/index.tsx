import NewPaletteList from '@/domain/new/components/NewPaletteList';
import { Suspense } from 'react';

function Index() {
  return (
    <>
      <Suspense fallback={<></>}>
        <NewPaletteList />
      </Suspense>
    </>
  );
}

export default Index;
