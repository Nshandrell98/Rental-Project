import React from 'react'
import HSlider from './Slider'
import {Link} from 'react-router-dom'

function Home(){
 
    return(
        <div className="hero-image">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="slogan">Search By Make</h3>
                    </div>
                    <div className="make col-sm-12">
                    <ul>
                        <li><Link to="/make/chevy"><button id="chevy" href="">Chevy</button></Link></li>
                        <li><Link to="/make/lamborghini"><button id="lamborghini" href="">Lamborghini</button></Link></li>
                        <li><Link to="/make/corvette"><button id="corvette" href="">Corvette</button></Link></li>
                        <li><Link to="/make/ford"><button id="ford" href="">Ford</button></Link></li>
                        <li><Link to="/make/bugatti"><button id="bugatti" href="">Bugatti</button></Link></li>
                        <li><Link to="/make/porsche"><button id="porsche" href="">Porsche</button></Link></li>
                        <li><Link to="/make/tesla"><button id="tesla" href="">Tesla</button></Link></li>
                        <li><Link to="/make/maserati"><button id="maserati">Maserati</button></Link></li>
                    </ul>
                    </div>
                    <div className="hSlider col-sm-12">
                        <HSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home