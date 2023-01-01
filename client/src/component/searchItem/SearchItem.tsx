import './searchItem.scss';

export default function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/384019382.webp?k=ccffdaf92acb8156378cc534122ba94e608c0479bd34abbe1cf40294c048c209&o=&s=1"
        alt="hotel"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">QT Auckland</h1>
        <span className="siDistance">0.5 km from centre</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio, 1 bathroom, 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Include taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}
