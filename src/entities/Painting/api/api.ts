import { api, ApiResponseData } from '~shared/api';
import { routes } from '../api';
import { Painting } from '../model';

export const loadPaingings = () => {
  return api.get<any, ApiResponseData<Painting[]>>(routes.getPaintings());
};
