import './hotel.scss';
import Navbar from '../../component/navbar/Navbar';
import Header from '../../component/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import MailList from '../../component/mailList/MailList';
import Footer from '../../component/footer/Footer';
import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { dayDifference } from '../../helper/helper';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../component/reserve/Reserve';
import { capitalizeFirstLetter } from '../../helper/helper';

function Hotel(): JSX.Element {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { data, loading } = useFetch(`/hotels/find/${id}`);

  const userContext = useContext(AuthContext);
  const user = userContext.state.user;
  const navigate = useNavigate();

  const { state } = useContext(SearchContext);
  const dates = state?.dates;
  const options = state?.options;

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i: number) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber: number;

    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      {!open && (
        <>
          <Navbar />
          <Header type="list" />
        </>
      )}
      {loading ? (
        'Loading'
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove('left')}
              />
              <div className="sliderWrapper">
                <img
                  src={`${data.photos[slideNumber]}`}
                  alt="property"
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove('right')}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or book now</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data.distance} from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo: any, i: number) => {
                return (
                  <div className="hotelImgWrapper">
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo}
                      alt="hotel"
                      className="hotelImg"
                    />
                  </div>
                );
              })}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">
                  Stay in the heart of {capitalizeFirstLetter(data.city)}
                </h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Situated in the real heart of{' '}
                  {capitalizeFirstLetter(data.city)}, this hotel has an
                  excellent location score of 9.4
                </span>
                <h3>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{' '}
                  nights)
                </h3>
                <button onClick={handleClick}>Reserve or book now</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
}

export default Hotel;
