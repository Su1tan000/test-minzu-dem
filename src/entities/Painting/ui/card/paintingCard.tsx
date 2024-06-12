import { Painting } from '~entities/Painting/model';

const PaintingCard: React.FC<Painting> = ({
  mainImage,
  title,
  createdYear,
  size,
}) => {
  return (
    <div className="w-64 max-[475px]:w-32">
      <a href="#" className="block items-center">
        <img src={mainImage} alt="" className="rounded-md" />
        <div className="text-center p-2">
          <h3 className="text-lg max-[475px]:text-xs">
            {title}, {createdYear}
          </h3>
          <p className="text-sm text-slate-500 max-[475px]:text-xs">
            {size.width}W x {size.height}H x {size.d} D cm
          </p>
        </div>
      </a>
    </div>
  );
};

export default PaintingCard;
