import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card border-0 shadow">
                        <div className="card-body p-5">
                            <h1 className="font-weight-light mb-4">Welcome to MyWineCellar.info</h1>
                            <p className="lead">MyWineCellar.info is an open source application that keeps track of your
                                wines, their reviews and their
                                tasting reviews.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body text-center">
                                <div><i className="fas fa-wine-bottle fa-5x"></i></div>
                                <br/>
                                <h5 className="card-title">Cellar</h5>
                                <p className="card-text">Store your wines and know when to drink it!</p>
                                <p className="card-text">Plenty of ways to store and locate.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div><i className="far fa-star fa-5x"></i></div>
                                <br/>
                                <h5 className="card-title">Ratings</h5>
                                <p className="card-text">Rate wines so you know what to drink next...</p>
                                <p className="card-text">or NOT if its bad!</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div><i className="far fa-clipboard fa-5x"></i></div>
                                <br/>
                                <h5 className="card-title">Tasting Notes</h5>
                                <p className="card-text">Take and refer back to tasting notes.</p>
                                <p className="card-text">Also feel free to wishlist wines for future tastings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;