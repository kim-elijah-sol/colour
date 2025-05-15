import FavouritePaletteList from '@/domain/favourite/components/FavouritePaletteList';
import { Suspense } from 'react';

function Favourite() {
  return (
    <Suspense fallback={<></>}>
      <FavouritePaletteList />
    </Suspense>
  );
}

export default Favourite;
