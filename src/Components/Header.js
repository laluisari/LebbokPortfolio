import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Header = () => {
  
  const el =  useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["culture", "culinary","tour holiday"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true,
      cursorChar: " _"
      
    }, []);

    // Destropying
    return () => {
      typed.destroy();
    };
  });
 

  return(
    <div className="header-wrapper">
        <div className="main-info">
            <h2>Lebbok-you are free to manage your vacation in Lombok</h2>
            <p>Karena berlibur dengan kebebasan sesuai keinginan kita adalah liburan yang sebenarnya</p>
            <div className="typed-text">
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
            <br /><br />
            <a href="#" className="btn-main-offer">booking Now</a>     
        </div>
    </div>
  )
};

export default Header;
