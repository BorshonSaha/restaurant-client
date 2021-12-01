import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './Header.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
          container: container.current, // the dom element that will contain the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../Animation/yummy.json') // the path to the animation json
        })
      }, [])

    return (
        <div className="row d-flex align-items-center App">
            <div className="col-md-7">
                <h1 className="orange"><b>Experience The Finest<br />Quality Food</b></h1>
                <p className='mt-4'>We offer a highly seasonal and continuously sensory tasting <br /> menu experience. We Offer the best quality food at amazing <br /> price. Check our menu and order your favourite ones. <br /> <a href="/menu"><Link to='/menu'><Button className="mt-3">Our Menu</Button></Link></a> </p>
            </div>
            <div className="col-md-5">
                <div className="animation" ref={container}></div>
            </div>
        </div>
    );
};

export default Header;