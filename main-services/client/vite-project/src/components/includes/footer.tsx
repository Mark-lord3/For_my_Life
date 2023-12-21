

import React,{useEffect} from 'react'
import { NavLink } from "react-router-dom"
import Snowfall from 'react-snowfall'
const Footer: React.FC = () => {
    
    return (
      <footer>
        <Snowfall
  //     Changes the snowflake color
        color="white"

        style={{
            position: 'relative',
            
            
            width: '100%',
            height: '300px',
            zIndex: '1000'
          }}
        // Applied to the canvas element
        // style={{ background: '#fff' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={80}
        />
        <div className='footer-objects'>
            <div>
                <div>
                    <NavLink to="/home" className='footer-link remove-style-from-link'>
                        <div>Home</div>
                    </NavLink>
                </div>
            </div>
            <div className=''>
                <div>
                    <NavLink to="/about" className='footer-link remove-style-from-link'>
                        <div>About</div>
                    </NavLink>
                    <NavLink to="/contact" className='footer-link remove-style-from-link' >
                        <div>Contact</div>
                    </NavLink>
                    <NavLink to="/feedback" className='footer-link remove-style-from-link'>
                        <div>Feedback</div>
                    </NavLink>
                    <NavLink to="/promotions" className='footer-link remove-style-from-link'>
                        <div>Promotions</div>
                    </NavLink>

                </div>
            </div>
        </div>
        <svg viewBox="0 0 120 28">
        <defs>
          <mask id="xxx">
            <circle cx="7" cy="12" r="40" fill="#fff" />
          </mask>

          
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>

        <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-2" />
        <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0" />

        
        <g className="gooeff">
          
          <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="1" />
        </g>
      </svg>
      </footer>
      
    )
};

export default Footer;
