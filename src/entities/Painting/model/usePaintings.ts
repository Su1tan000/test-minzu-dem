import { useAtomValue, useSetAtom } from 'jotai';

import { paintingsAtom, setPaintingsAtom } from './atom';

export const usePaintings = () => {
  return useAtomValue(paintingsAtom);
};

export const useSetPaintings = () => {
  return useSetAtom(setPaintingsAtom);
};
