import React, { useEffect, useRef } from 'react';


const AboutUs: React.FC = () => {
  const refParallax = useRef<HTMLDivElement>(null);
  const refscroll = useRef<HTMLDivElement>(null);
  // let lastScrollTop = 0;
  const refBlock1 = useRef<HTMLDivElement>(null);
  const refBlock2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  const handleScroll = () => {
    if (refParallax.current) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const opacity = Math.min(scrollTop / 1000, 1); // Adjust the value as needed for opacity change
      refParallax.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${0.302 + 0.5 * opacity}), rgba(0, 0, 0, ${0.302 + 0.5 * opacity})), url('/src/assets/images/images-about/img1-about.jpeg')`;
    }
  };
  const handleScroll2 = () => {
    if (refscroll.current) {
      const scrollPos = window.scrollY;
      refscroll.current.style.backgroundSize = 100 + scrollPos + '%'; // Adjust the factor for scroll speed
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
      {/* <div className='parallax' ref={refParallax}>
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
      </div> */}
      <div className="hero-back" ref={refscroll}>
            {/* <img src="hero-front.webp" alt="">  */}
      </div>
      <div className="content-about">
            <h1>Content goes here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa cupiditate fuga natus voluptatem dolorum ab illo, quos adipisci voluptatum explicabo cumque sint neque quo sit consequatur molestiae expedita saepe harum, nobis labore, praesentium. Dicta nobis consectetur, culpa consequatur. Nisi velit aspernatur veritatis, vero iste culpa voluptates eos provident officiis placeat quis voluptas magnam animi neque rem nam sint tempore, amet aut libero? Dignissimos quisquam autem eos. Fuga, incidunt temporibus id sit. Iusto labore animi a deleniti magni sequi incidunt at maiores harum sed quo accusantium aperiam, officiis architecto ducimus consequuntur distinctio doloremque numquam esse consectetur velit beatae. Sequi perspiciatis, inventore.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quidem veniam dolor ducimus explicabo est dignissimos ad velit minima qui.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sint eaque voluptatem praesentium beatae, voluptatum labore nisi assumenda, quaerat tempore iure modi accusantium quia distinctio error architecto illum nemo. Explicabo in molestiae recusandae tempora placeat distinctio, est quibusdam voluptatem voluptatibus nemo debitis officia vel voluptates quo, vero et, reprehenderit magnam!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima voluptatum quisquam, quibusdam beatae? Voluptatibus vel, inventore deserunt tempore recusandae eum consequuntur ad dolores, nostrum molestias similique cumque maxime consectetur numquam delectus suscipit. Harum corporis sunt soluta illo vero maiores omnis id atque ab ea. Quis beatae perferendis tenetur odit, esse nihil voluptas, nobis, amet consequatur totam quod suscipit doloremque? Explicabo ducimus at tenetur consequatur modi fugit. Accusantium quam culpa nesciunt officia commodi ipsam modi magni fugiat qui porro sapiente, saepe harum nostrum ad molestiae velit veritatis facere dolorum deserunt aliquam et labore. Minus molestias pariatur nemo, non ducimus assumenda consequatur quas, deleniti eius facere saepe! Expedita odio beatae nihil repudiandae velit est similique non laborum sequi, dolorem totam, iusto ex, nisi molestias animi. Sunt neque consequatur minus blanditiis, esse harum fuga voluptate reprehenderit ipsam explicabo. Labore, explicabo impedit repellendus aliquid omnis, ad temporibus laudantium dolore optio voluptatibus delectus quaerat fugit totam fuga rerum placeat similique velit quos quia aut ipsam iste excepturi. Ad, reiciendis laborum iste, dignissimos recusandae beatae tempora atque odio consectetur consequuntur neque earum adipisci illo, accusantium, corporis? Veniam quae quibusdam cupiditate, optio provident quo praesentium recusandae ex doloremque! Totam nesciunt, neque alias eveniet voluptatum reiciendis modi nemo.</p>
      </div>
      <div className="hero-back2">
            {/* <img src="hero-front.webp" alt="">  */}
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
