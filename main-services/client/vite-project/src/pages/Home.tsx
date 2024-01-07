

import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import videoBG1 from '../../../../server/src/assets/videos/production_id_4709297 (2160p).mp4'
import videoBG2 from '../../../../server/src/assets/videos/pexels-cottonbro-5473806 (2160p).mp4'
import videoBG3 from '../../../../server/src/assets/videos/pexels-mikhail-nilov-6963744 (Original).mp4'
import videoBG4 from '../../../../server/src/assets/videos/production_id_4354035 (2160p).mp4'
import top_button from '../assets/images/svg-home/top-button.svg';
import react from '../assets/images/images-home/bottom-images/react.png';
import node from '../assets/images/images-home/bottom-images/nodejs.ico';
import c from '../assets/images/images-home/bottom-images/c.png';
import blender from '../assets/images/images-home/bottom-images/blender.png';
import javascript from '../assets/images/images-home/bottom-images/javascript.png';
import mysql from '../assets/images/images-home/bottom-images/mysql.png';
import php from '../assets/images/images-home/bottom-images/php.png';
import typescript from '../assets/images/images-home/bottom-images/typescript.png';
import linux from '../assets/images/images-home/bottom-images/linux.svg';
import grapql from '../assets/images/images-home/bottom-images/graphql.svg';
import hosting from '../assets/images/images-home/bottom-images/hosting.png';
import adobe from '../assets/images/images-home/bottom-images/adobe.png';
import { IonIcon } from "@ionic/react";
import axios from 'axios';
// import bgimagefigure1 from '../assets/images/images-home/photo-1454117096348-e4abbeba002c.jpeg'
// import bgimagefigure2 from '../assets/images/images-home/37392471.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../assets/images/img_1.jpg';
import slide_image_2 from '../assets/images/img_2.jpg';
import slide_image_3 from '../assets/images/img_3.jpg';
import slide_image_4 from '../assets/images/img_4.jpg';
import slide_image_5 from '../assets/images/img_5.jpg';
import slide_image_6 from '../assets/images/img_6.jpg';
import slide_image_7 from '../assets/images/img_7.jpg';
import { Services } from '../components/Interfaces/Services/Services';
const Home: React.FC = () => {
    const [services, setServices] = useState<Services[]>([]);

    const [showScrollButton, setShowScrollButton] = useState(false);
    const videoSources = [videoBG1, videoBG2, videoBG3, videoBG4];
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // This makes the scrolling smooth
        });
      };
      const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3002/api/video')
            .then(response => {
                setVideoUrl(response.data);
            })
            .catch(error => {
                console.error('Error fetching video URL:', error);
            });
        axios.get('https://localhost:3002/api/services')
            .then((response) => {
                const data = response.data;
                console.log('====================================');
                console.log(response.data);
                console.log('====================================');
                setServices(data);
            })
            .catch((error) => {
                console.error('Error fetching warranty technics:', error);
            });
    }, []);
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
        <div className="triangle-home">
            <div className='triangle-home-section'>

                <div className='triangle-home-title'>
                    My new web
                </div>
                <div className='triangle-home-text'>
                <p>Some text Some text Some text Some text Some text Some text </p>
                </div>
            </div>
        </div>
        <div className='homepage page'>  
            <div>
            </div>      
            <div className='our-work'> 
                <h1>Our Work</h1>
                <div>
                    <p>Some text Some text Some text Some text Some text Some text </p>
                </div>
                <button className="btn-hover color-5">BUTTON</button>
            </div>  

        </div>
        <div className="video-slider">
            <div className='video-slider-left'>
                <video className='videoBG1' src={videoBG1} autoPlay loop muted></video>
                <video className='videoBG2' src={videoBG2} autoPlay loop muted></video>
                <div className='video-slider-left-empty'>

                </div>
            </div>
            <div className='video-slider-right'>
                <div className='video-slider-right-empty'>

                </div>
                <video className='videoBG3' src={videoBG3} autoPlay loop muted></video>
                <video className='videoBG4' src={videoBG4} autoPlay loop muted></video>
            </div>
            
            
        </div>
        {videoUrl && (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
        {/* <div className='figure-bg'>
        <img className='figure-bg' src={bgimagefigure2} />
        </div> */}
        <div className='services-list'>
            <div className='services-list-size-section'>
            <div className='services-list-section'>
                <div>
                    <h1>Our service</h1>
                </div>
                <div>
                <p>Some text Some text Some text Some text Some text Some text </p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi obcaecati laboriosam iusto ipsum vero inventore modi tenetur error a! Magni doloremque, iure totam quibusdam at iste porro pariatur rem voluptatum. </p>
            </div>
            <div className='service-list-blocks'>
                <div className='service-list-blocks-section'>
                    {services.map(serv => (

                        <Link to={'/service:id'} key={serv.id}>
                            <div className='service-list-block'>
                                <div className='service-list-block-image'>
                                    {serv.images}
                                </div>
                                <div className='service-list-block-text'>
                                    <p>{serv.title}</p>
                                    <p>{serv.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                   
                </div>
                {/* <div className='service-list-blocks-section'>
                    <div className='service-list-block'>

                    </div>
                    <div className='service-list-block'>
                        
                    </div>
                    <div className='service-list-block'>
                        
                    </div>
                    <div className='service-list-block'>
                        
                    </div>
                </div> */}
                </div>
            </div>
        </div>
        <div className='services-choice'>
            
            
            <div className="container">
      
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src={slide_image_1} alt="slide_image" />
                        <div className='service-info'>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} alt="slide_image" />
                        <div className='service-info'> 
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} alt="slide_image" />
                        <div className='service-info'>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_4} alt="slide_image" />
                        <div className='service-info'>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_5} alt="slide_image" />
                        <div className='service-info'>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_6} alt="slide_image" />
                        <div className='service-info'>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_7} alt="slide_image" />
                        <div className='service-info'>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                            <div className=''>
                                <h4>Best product ever</h4>
                                <p>This is very nice</p>
                                <p>18$</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        {/* <IonIcon name="arrow-back-outline"></IonIcon> */}
                        <img src='src/assets/images/svg-home/left-arrow.svg'></img>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        {/* <IonIcon name="arrow-forward-outline"></IonIcon> */}
                        <img src='src/assets/images/svg-home/right-arrow.svg'></img>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                </div>
        </div>
        <div className='home-future-wishes'>
                <div className='home-future-wishes-titles'>
                    <div className=''>
                        Future wishes
                    </div> 
                    <div className=''>
                       We want to see your happy faces

                    </div>   
                    <div className=''>
                      grow up ...

                    </div>
                </div>  
                <div className='home-future-wishes-blocks'>
                    <div className='home-future-wishes-block'>

                    </div>
                    <div className='home-future-wishes-block'>
                        
                    </div>
                    <div className='home-future-wishes-block'>
                        
                    </div>
                </div>
        </div>
        <div className='home-services'>
            <div className='home-services-tri'>
                <div className='services-choice-triangle'>
                </div> 
                <div className='services-choice-triangle2'>
                </div> 
                <div className='services-choice-triangle3'>
                </div>
            </div>
            <div className='home-services-offer'>
                    <p>You can become ur worker</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis alias ullam mollitia libero incidunt excepturi ipsam pariatur possimus temporibus nihil minima, adipisci, repellat architecto? Iste perferendis eum incidunt tempora?</p>
                    <button>send</button>
            </div>
        </div>
        <div className='home-tech'>
            <div className='home-tech-first'>
                <div className='home-tech-block'>
                    <img src={react} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={c} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={linux} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={hosting} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={node} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={javascript} className=''></img>
                </div>
            </div>
            <div className='home-tech-second'>
                <div className='home-tech-block'>
                    <img src={typescript} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={mysql} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={grapql} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={adobe} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={blender} className=''></img>
                </div>
                <div className='home-tech-block'>
                    <img src={php} className=''></img>
                </div>
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

export default Home;
