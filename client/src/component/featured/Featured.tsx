import useFetch from '../../hooks/useFetch';
import './featured.scss';

export default function Featured(): JSX.Element {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=auckland,wellington,queenstown'
  );

  return (
    <div className="featured">
      {loading ? (
        'Loading, please wait'
      ) : (
        <>
          {' '}
          <div className="featuredItem">
            <img
              src="https://bookmestatic.net.nz/bookme-product-images/products/8407/8407_image4_nZlm3kaSOo_JDFB_SkyTowerImage4.jpg"
              alt="Auckland, New Zealand"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Auckland</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://bookmestatic.net.nz/bookme-product-images/products/8526/8526_image1_pgLenerYfu_WERE_Harbour-View.jpg"
              alt="Wellington, New Zealand"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Wellington</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://bookmestatic.net.nz/bookme-product-images/products/8538/8538_image1_CDFY_SkylineLugeRestaurant2.jpg"
              alt="Queenstown, New Zealand"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Queenstown</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
