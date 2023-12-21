import React, { useEffect, useRef } from 'react';


const AboutUs: React.FC = () => {
  const refParallax = useRef<HTMLDivElement>(null);
  // let lastScrollTop = 0;
  const refBlock1 = useRef<HTMLDivElement>(null);
  const refBlock2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (refParallax.current) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const opacity = Math.min(scrollTop / 1000, 1); // Adjust the value as needed for opacity change
      refParallax.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${0.302 + 0.5 * opacity}), rgba(0, 0, 0, ${0.302 + 0.5 * opacity})), url('/src/assets/images/images-about/img1-about.jpeg')`;
    }
  };
  const scrollToNextSection = () => {
    if (refBlock1.current) {
      window.scrollTo({
        top: refBlock1.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const scrollToNextSection2 = () => {
    if (refBlock2.current) {
      window.scrollTo({
        top: refBlock2.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const reveal = () => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      reveal();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main>
      <div className='parallax' ref={refParallax}>
        <div className='text'>
          <h1>About</h1>
          <button onClick={scrollToNextSection} className='scroll-button'>
          Scroll Down
        </button>
        </div>
        
      </div>

      <div className='blocks-section' ref={refBlock1}>
        <div className='blocks'>
          <div className='block'></div>
          <div className='block'></div>
          <div className='block'></div>
        </div>
        <button onClick={scrollToNextSection2} className='scroll-button'>
          Scroll Down
        </button>
      </div>

      <div className='empty-bg' ref={refBlock2}>
     
      {/* <section>
        <div className="container reveal fade-bottom">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            
            
          </div>
        </div>
      </section> */}

      <section>
        <div className="container-reveal reveal fade-left">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            
            
          </div>
        </div>
      </section>

      <section>
        <div className="container-reveal reveal fade-right">
          <h2>Caption</h2>
          <div className="text-container">
            <div className="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            
            
          </div>
        </div>
      </section>
      </div>
    </main>
  );
};

export default AboutUs;
