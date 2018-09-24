import React, { Component } from "react";
import { Link } from "react-router-dom";



class NotFound extends Component {
    render(){
        return(
            <div>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal">BookBrowse</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-dark" to="/">Home</Link>
                        <Link className="p-2 text-dark" to="/science">Science</Link>
                        <Link className="p-2 text-dark" to="/business">Business</Link>
                        <Link className="p-2 text-dark" to="/picture">Picture</Link>
                    </nav>
                </div>
                <div className="text-center mt-5">
                <h1>Sorry Book Yet To Be Reviewed</h1>
                <h3 className="text-muted">view other books reviews</h3>
                    <Link className="p-2 text-dark" to="/">Back To Home</Link>
                </div>
            </div>
        )
    }
}


export default NotFound;