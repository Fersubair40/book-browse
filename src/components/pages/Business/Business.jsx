import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Business.css"
import Footer from "../Footer/Footer";
import LoadingSpinner from "../LoadingSpinner";



class Business extends Component {
    state = {
        bookInfo: [],
        loading:true
    };

    componentWillMount() {
        const overviewPromise = axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=5c73f11456c44cb8a5f8995905412eb2");

        overviewPromise.then(response => {
            this.setState({
                //    bookImage: response.data.results.lists[0].books[0].book_image,
                //    bookTitle: response.data.results.lists[0].books[0].title
                bookInfo: response.data.results.lists[13].books,
                loading: false
            })                                    
            console.log(response);
        });
    };
    getBooks = () => {
        const bookInfo = this.state.bookInfo;
        const BookInfoJsx = bookInfo.map(book => {
            return (    
                <div key={book.primary_isbn13} className="col">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal"></h4>
                            </div>
                            <div className="card-body">
                                <Link to={`/book/${book.primary_isbn13}`}><img className="card-img-top" src={book.book_image}></img></Link>
                            </div>
                            <div className="card-footer">
                                <p className="card-text my-0"><small className="text-muted">{book.title}</small>
                                </p>
                                <p className="card-text my-0"><small className="text-muted">{book.author}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return BookInfoJsx;
    }

    render() {
        const loading = this.state.loading;
        return (

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
                {loading ? <LoadingSpinner/> :
                <div className="container">
                    <h5>Best Selling Business Books</h5>
                    <div className="row justify-content-center">
                        {this.getBooks()}
                    </div>
                </div>
                }
                <Footer/>
            </div>
        )
    }
}

export default Business;