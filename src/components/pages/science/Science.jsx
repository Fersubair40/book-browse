import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./science.css"
import Footer from '../Footer/Footer';
import LoadingSpinner from "../LoadingSpinner";



class Science extends Component {
   state={
       bookInfo:[],
       scienceBooks:[],
       loading:true
   };
    componentWillMount() {
        const overviewPromise = axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=kD4CobbkQrz69Gsp5APE9OmxTfZP0J9c")
        overviewPromise.then(response => {
            const bookList = response.data.results.lists
            const scienceBooks = bookList.filter(e => e.list_name.includes('Science'))


            this.setState({
                bookInfo: response.data.results.lists[14].books,
                scienceBooks: this.getRandomBooks(scienceBooks).books,
                loading:false
        })
        });
    };

    getRandomBooks = (booklist) => {
        return booklist[Math.floor(Math.random() * booklist.length)]
    }


    getScienceBooks = () => {
        const bookInfo = this.state.scienceBooks;
        const BookInfoJsx = bookInfo.map(book => {
            return (
                <div key={book.primary_isbn13}className="col">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
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
    getBooks = () => {
        const bookInfo = this.state.bookInfo;

        const BookInfoJsx = bookInfo.map(book => {
            return (
                <div key={book.title} className="col">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                            </div>
                            <div className="card-body">
                                <Link to={`/book/${book.primary_isbn13}`}><img className="card-img-top" src={book.book_image}></img></Link>
                            </div>
                            <div className="card-footer">
                                <p className="card-text my-0"><small class="text-muted">{book.title}</small>
                                </p>
                                <p className="card-text my-0"><small class="text-muted">{book.author}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return BookInfoJsx;
    }

    render(){
        const loading = this.state.loading;
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
                   {loading ? <LoadingSpinner/> :
                    <div className="container">
                    <h5>Best Selling Science Books</h5>
                    <div className="row justify-content-center">
                        {this.getBooks()}
                    </div>
                    <h5>Best Selling Science Books</h5>
                    <div className="row justify-content-center">
                        {this.getScienceBooks()}
                    </div>
                    </div>
                    }
                   <Footer/>
               </div>        
        )
    }
}

export default Science;