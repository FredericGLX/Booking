import useFetch from '../../hooks/useFetch';
import './featuredProperties.scss';
import { HotelModel } from '../../types/types';

export default function FeaturedProperties(): JSX.Element {
  const { data, loading, error } = useFetch('/hotels/?featured=true&limit=4');

  return (
    <div className="fp">
      {loading ? (
        'Loading'
      ) : (
        <>
          {data.map((item: HotelModel) => {
            return (
              <div className="fpItem" key={item._id}>
                <img src={item.photos[0]} alt="house" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button> <span>Excellent</span>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
