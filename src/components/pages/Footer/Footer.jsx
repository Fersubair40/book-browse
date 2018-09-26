import React, { Component } from "react";


class Footer extends Component {
    render(){
        return(
            <div>
                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                        <div className="row">
                            <div className="col-12 col-md">
                            <img className="mb-2" src='' alt="" width="24" height="24"></img>
                                <small className="d-block mx-5 mb-3 text-muted">&copy;2018-2019</small>
                            </div>
                                <div className="col-6 col-md">
                                    <h5>Categories</h5>
                                    <ul className="list-unstyled text-smaill">
                                        <li className="text-muted">Non-Fiction</li>
                                        <li className="text-muted">Fiction</li>
                                        <li className="text-muted">Series</li>
                                        <li className="text-muted">Sport</li>
                                    </ul>
                                </div>
                                    <div className="col-6 col-md">
                                        <h5>Resources</h5>
                                        <ul className="list-unstyled text-smaill">
                                            <li className="text-muted">New York Times </li>
                                            <li className="text-muted">Fiction</li>
                                            <li className="text-muted">Fiction</li>
                                            <li className="text-muted">Fiction</li>
                                        </ul>
                                    </div>
                                <div className="col-6 col-md">
                                    <h5>ABout</h5>
                                    <ul className="list-unstyled text-small">
                                        <li className="text-muted">Team</li>
                                        <li className="text-muted">Team</li>
                                    </ul>
                                </div>        
                        </div>
                </footer>
            </div>
        )
    }
}


export default Footer;