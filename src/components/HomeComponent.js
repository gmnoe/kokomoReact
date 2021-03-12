import React, { Component } from 'react';
import { Media } from 'reactstrap';
import RenderReserve from './ReserveComponent';

class Home extends Component {
    render() {
        return(
            <div className="container-fluid px-0">
                <br /> <br />
                <div className="row">
                    <div className="col d-none d-xl-block">
                        <img className="img-fluid" src='../assets/images/homeDrink.jpg' alt="Rum Cocktail" id="indexpic" />
                    </div>
                    <div className="col-10 col-md-10 col-lg-8 col-xl-6 mx-auto">
                        <RenderReserve />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Media>
                            <Media left>
                            <Media className="d-none d-xl-block" src="../assets/images/knifeAndFork.jpg" alt="A fork and a knife on a table" id="indexpic" />
                            </Media>
                            <Media body className="ml-5">
                            <p>Are you ready to have the caribbean experience right here in Sioux Falls?
                                <br />
                                <br />
                                Island flair meets coastal retreat at Kokomo Bar & Grille.
                                <br /><br />
                                Located downtown on Main Ave, discover a menu highlighted with exceptional flavors from the sea.
                                <br /><br />
                                Sip a carefully crafted cocktail outdoors.
                                <br /><br />
                                Come in for an unforgettable event or night out.
                                <br /><br />
                                Relax.
                                Escape.
                                Enjoy.</p>
                            </Media>
                            <Media body className="ml-5">
                                <p>We look forward to serving you!
                                <br />
                                <br />
                                A classic island feel with fresh flavors will await guests at Kokomo Bar & Grille.
                                <br />
                                <br />
                                Located on Main Ave in downtown Sioux Falls, Kokomo will transport guests ocean-side with a casual, resort-like atmosphere perfect for unwinding.
                                <br />
                                <br />
                                </p>
                            </Media>
                        </Media>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Media>
                            <Media left>
                                <Media className="d-none d-xl-block" src="../assets/images/oyster.jpg" alt="Oysters" id="indexpic" />
                            </Media>
                            <Media body className="ml-5 align-self-center">
                                <h3 className="text-center" id="island">Your Island Getaway is Never Too Far Away!</h3>
                            </Media>
                        </Media>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;