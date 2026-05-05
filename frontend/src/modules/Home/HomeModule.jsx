import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './home.scoped.css';
import img1 from '../../images/c.jpeg';
import img2 from '../../images/s.jpg';
import img3 from '../../images/abc.jpg';
import img4 from '../../images/2.jpg';
import img5 from '../../images/12.jpg';
import kandy from '../../images/Kandy.jpg';
import colombo from '../../images/colombo.jpg';
import kurunagala from '../../images/kurunagala.jpg';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const ImageSlider = () => {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const timeRunningRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const carousel = carouselRef.current;
    const list = listRef.current;
    const runningTime = timeRunningRef.current;

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      const sliderItemsDom = list.querySelectorAll('.item');
      if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
      runningTime.style.animation = 'none';
      void runningTime.offsetHeight;
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    };

    nextBtn.onclick = () => showSlider('next');
    prevBtn.onclick = () => showSlider('prev');

    resetTimeAnimation();

    return () => clearTimeout(runNextAuto);
  }, []);

  const services = [
    {
      icon: <DirectionsBusIcon style={{ fontSize: '2rem', color: '#333' }} />,
      title: 'BUS',
      description: 'Description here.',
    },
    {
      icon: <DirectionsBusIcon style={{ fontSize: '2rem', color: '#333' }} />,
      title: 'VAN',
      description: 'Description here.',
    },
    {
      icon: <DirectionsBusIcon style={{ fontSize: '2rem', color: '#333' }} />,
      title: 'BIKE',
      description: 'Description here.',
    },
  ];

  const productContainersRef = useRef([]);

  useEffect(() => {
    const productContainers = productContainersRef.current;
    productContainers.forEach((item, i) => {
      const containerWidth = item.getBoundingClientRect().width;

      const nextButton = item.querySelector('.nxt-btn');
      const prevButton = item.querySelector('.pre-btn');

      // Ensure buttons exist before adding event listeners
      if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
          item.scrollLeft += containerWidth;
        });

        prevButton.addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
        });
      }

      return () => {
        if (nextButton && prevButton) {
          nextButton.removeEventListener('click', () => {});
          prevButton.removeEventListener('click', () => {});
        }
      };
    });
  }, []);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          <div className="list" ref={listRef}>
            <div className="item" style={{ backgroundImage: `url(${img1})` }}></div>
            <div className="item" style={{ backgroundImage: `url(${img2})` }}></div>
            <div className="item" style={{ backgroundImage: `url(${img3})` }}></div>
            <div className="item" style={{ backgroundImage: `url(${img4})` }}></div>
            <div className="item" style={{ backgroundImage: `url(${img5})` }}></div>
          </div>
          <div className="arrows">
            <button className="prev" ref={prevBtnRef}>{'<'}</button>
            <button className="next" ref={nextBtnRef}>{'>'}</button>
          </div>
          <div className="timeRunning" ref={timeRunningRef}></div>
        </div>
      </div>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={img5} alt="Bus" />
          </div>
          <div className="about-content">
            <h2>WHO ARE WE?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <div className="btn-container">
              <Link to="/aboutUs" className="read-more-btn">READ MORE</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>OUR SERVICES</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-container">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="product">
        <h2 className="product-category">OUR DESTINATIONS</h2>
        <div className="product-container" ref={(el) => el && productContainersRef.current.push(el)}>
          <button className="pre-btn">
            <span>{'>'}</span>
          </button>
          <button className="nxt-btn">
            <span>{'>'}</span>
          </button>

          {/* Example product cards */}
          <div className="product-card">
            <div className="product-image"> 
              <img src={kandy} class="main-image" alt="Kandy" />
              <img src={colombo} class="hover-image" alt="colombo" /> 
            </div>
            <div className="product-info">
              <h2 className="product-brand">Kandy</h2>
              <p className="product-short-description">Kandy - Panadura 17</p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">  
              <img src={colombo} className="main-image" alt="colombo" /> 
              <img src={colombo} class="hover-image" alt="colombo" /> 
            </div>
            <div className="product-info">
              <h2 className="product-brand">Colombo</h2>
              <p className="product-short-description">qqqqqqqqqqqqq 17</p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">  
              <img src={kurunagala} className="main-image" alt="kurunagala" /> 
              <img src={colombo} class="hover-image" alt="colombo" /> 
            </div>
            <div className="product-info">
              <h2 className="product-brand">Kurunagala</h2>
              <p className="product-short-description">qqqqqqqqqqqqq 17</p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">  
              <img src={kurunagala} className="main-image" alt="kurunagala" /> 
              <img src={colombo} class="hover-image" alt="colombo" /> 
            </div>
            <div className="product-info">
              <h2 className="product-brand">Kurunagala</h2>
              <p className="product-short-description">qqqqqqqqqqqqq 17</p>
            </div>
          </div>


          <div className="product-card">
            <div className="product-image">  
              <img src={kurunagala} className="main-image" alt="kurunagala" /> 
              <img src={colombo} class="hover-image" alt="colombo" /> 
            </div>
            <div className="product-info">
              <h2 className="product-brand">Kurunagala</h2>
              <p className="product-short-description">qqqqqqqqqqqqq 17</p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">  
              <img src={kurunagala} className="main-image" alt="kurunagala" />
              <img src={colombo} class="hover-image" alt="colombo" />  
            </div>
            <div className="product-info">
              <h2 className="product-brand">Kurunagala</h2>
              <p className="product-short-description">qqqqqqqqqqqqq 17</p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">  
              <img src={kurunagala} className="main-image" alt="kurunagala" />
              <img src={colombo} class="hover-image" alt="colombo" />  
            </div>
            <div className="product-info">
              <h2 className="product-brand">Kurunagala</h2>
              <p className="product-short-description">qqqqqqqqqqqqq 17</p>
            </div>
          </div>

        </div>
      </section>

      <section className="map-section">
  <div className="map-image">
    <img src={kurunagala} alt="Location Map Background" />
    <div className="map-overlay">
      <div className="map-container">
        <div className="map-content">
          <h2>SAVE YOUR TIME</h2>
          <p>Discover the fastest routes and reliable transport services to your destination.</p>
          <div className="map-button">
            <Link to="/timetable" className="timetable-btn">GO TO TIMETABLE</Link>
          </div>
        </div>
        <div className="map-frame">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6926234797934!2d80.56300567448426!3d7.16148941542188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae371e75db7918f%3A0x64653b0da9cc8b12!2sIndika%20Motors!5e0!3m2!1sen!2slk!4v1737560088076!5m2!1sen!2slk" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            id="map">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default ImageSlider;
