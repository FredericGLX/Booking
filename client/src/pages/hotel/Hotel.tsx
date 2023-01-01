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
import { useState } from 'react';

function Hotel(): JSX.Element {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const photos: Array<{ src: string }> = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/384019382.jpg?k=9ebf0881dd526265e9d19be3d1d0fe01e523961cfbd63897c0310d64a9de74c9&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/384019179.jpg?k=646a41186d3811f72a2399e8e6f09e0eb7197aa5aa6c7bb1f8331b40f8af28fb&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/384019090.jpg?k=2b14698642ee0ad21196b9adf8ff9da8850261d3b9dca7432b9930b4001a7746&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/384019359.jpg?k=b719d1f63de7b7d31818da2216d864fddcd0afee2deb6b8e43c0b10339f73025&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/384019058.jpg?k=43f8c8ef9e06fa1e1173df2638cc08ea6ed38d02f923ebc66ea8591c2d63cddd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/384019129.jpg?k=e62d071f29f901ec40fa4c80118bab1e9a37abc0956c595f0f5a0427fabd8199&o=&hp=1',
    },
  ];

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

  return (
    <div>
      {!open && (
        <>
          <Navbar />
          <Header type="list" />
        </>
      )}
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
                src={`${photos[slideNumber].src}`}
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
          <h1 className="hotelTitle">QT Auckland</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => {
              return (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt="hotel"
                    className="hotelImg"
                  />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Auckland</h1>
              <p className="hotelDesc">
                Set in Auckland in the heart of the Viaduct Harbour, QT Auckland
                offers accommodation with a restaurant, valet parking, a fitness
                centre and a bar. With free WiFi, this 5-star hotel offers a
                24-hour front desk and room service. The accommodation provides
                a concierge service and luggage storage space for guests. All
                guest rooms come with air conditioning, a Chromecast, a
                Nespresso machine, wireless Bose speakers, a Dyson Supersonic
                hairdryer. At the hotel all rooms include a private bathroom
                with free toiletries. A la carte breakfast options are available
                every morning at Esther. Popular points of interest near QT
                Auckland include Sky Tower, Viaduct Harbour and SKYCITY Auckland
                Convention Centre. The nearest airport is Auckland Airport, 18
                km from the hotel. This is our guests' favourite part of
                Auckland, according to independent reviews.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 2-night stay!</h1>
              <span>
                Situated in the real heart of Auckland, this hotel has an
                excellent location score of 9.4
              </span>
              <h3>
                <b>$945</b> (9 nights)
              </h3>
              <button>Reserve or book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
