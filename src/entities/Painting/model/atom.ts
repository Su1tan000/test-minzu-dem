import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

import { Painting } from '~entities/Painting/model/types';
import { loadPaingings } from '~entities/Painting/api/api';

export interface ApiRequest {
  type: 'MH' | 'MES';
}

export const paintingsAtom = atomWithDefault<Painting[] | null>((_get) => null);

export const setPaintingsAtom = atom<
  Painting[] | null,
  unknown[],
  Promise<void>
>(
  (get) => get(paintingsAtom),
  async (_get, set) => {
    // todo: make api req

    const response = await loadPaingings();

    if (response.data) {
      set(paintingsAtom, response.data);
    }
  },
);
