import { useEffect, useMemo } from 'react';

import { Painting } from '~entities/Painting/model/types';

import {
  usePaintings,
  useSetPaintings,
} from '~entities/Painting/model/usePaintings';

import { PaintingCard } from '~entities/Painting';


const PaintingsList = () => {
  const paintings = usePaintings();
  const setPaintings = useSetPaintings();

  useEffect(() => {
    if (!paintings?.length) {
      setPaintings();
    }
  }, [paintings]);

  const renderCards = useMemo(
    () =>
      paintings?.map((painting: Painting, index) => (
        <PaintingCard
          key={index}
          mainImage={'http://localhost:3000' + painting.mainImage}
          title={painting.title}
          createdYear={painting.createdYear}
          size={{
            width: painting.size.width,
            height: painting.size.height,
            d: painting.size.d,
          }}
        />
      )),
    [paintings],
  );

  return <section className="flex flex-wrap gap-6">{renderCards}</section>;
};

export default PaintingsList;
