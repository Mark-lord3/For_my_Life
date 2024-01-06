

import React ,{useEffect,useState} from 'react'

import top_button from '../assets/images/svg-home/top-button.svg';
import top_img from '../assets/images/images-service/1183723.png'

const Services: React.FC = () => {
    
    const [showScrollButton, setShowScrollButton] = useState(false);
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // This makes the scrolling smooth
        });
      };
   
    useEffect(() => {
      const checkScroll = () => {
          if (!showScrollButton && window.scrollY > 400) {
              // Show button if we've scrolled 400px (you can adjust this value)
              setShowScrollButton(true);
          } else if (showScrollButton && window.scrollY <= 400) {
              // Hide button if we're less than 400px from the top
              setShowScrollButton(false);
          }
      };
  
      window.addEventListener('scroll', checkScroll);
      
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('scroll', checkScroll);
    }, [showScrollButton]);
    return (
      <main>
        {/* <div className="trapezoid"></div> */}
        <div className="top-service">
          <div className='top-service-block'>

          
            <div className='top-service-section'>

                <div className='top-service-title'>
                    My new web
                    https://mailchimp.com/whats-new/ -тут пример 

                </div>
                <div className='top-service-text'>
                <p>Some text Some text Some text Some text Some text Some text </p>
                </div>
            </div>
            <div className='top-service-image'>
              <img src={top_img}></img>
            </div>
          </div>
            <div className='top-service-button'>
              <button> Click </button>
            </div>
        </div>
        
        {showScrollButton && (
          <button className='to-topbtn' onClick={() => scrollToTop()}>
              <img src={top_button} alt="Scroll to top"/>
          </button>
      )}
      </main>
    )
};

export default Services;
