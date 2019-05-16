import React from 'react'

function Header() {
    return(
        <>
       <div className="outer-first nav1">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <a href="/"><img className="logo"  src="/images/StarstruckLogo.png"/></a>
                    <div className="dropdown">
                        <input  id="check01" type="checkbox" name="menu" />
                        <label htmlFor="check01"><i className="fas fa-grip-lines"></i></label>
                        <ul className="submenu">
                            <li><a href="/products">PRODUCTS</a></li>
                            <li><a href="#">LOCATIONS</a>
                            </li>
                            <li><a href="/help">HELP</a></li>
                            <li><a href="#">PROMOTIONS</a>
                            </li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-7 navList">
                    <ul className=" hl">
                        <li><a href="/products">PRODUCTS</a></li>
                        <li><a href="#">LOCATIONS</a>
                        </li>
                        <li><a href="/help">HELP</a></li>
                        <li><a href="#">PROMOTIONS</a>
                        </li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
    <video autoPlay muted loop id="stars">
        <source src="/images/stars.mp4" type="video/mp4"/>
    </video>
        </>
        
    )
}

export default Header
