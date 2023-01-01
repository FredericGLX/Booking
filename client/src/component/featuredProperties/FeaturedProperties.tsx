import './featuredProperties.scss';

export default function FeaturedProperties(): JSX.Element {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
          alt="house"
          className="fpImg"
        />
        <span className="fpName">Tiny House</span>
        <span className="fpCity">Germany, Berlin</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
          <button>8.9</button> <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
          alt="house"
          className="fpImg"
        />
        <span className="fpName">Tiny House</span>
        <span className="fpCity">Germany, Berlin</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
          <button>8.9</button> <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
          alt="house"
          className="fpImg"
        />
        <span className="fpName">Tiny House</span>
        <span className="fpCity">Germany, Berlin</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="fpRating">
          <button>8.9</button> <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}
