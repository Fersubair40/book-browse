import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './Book.css'
import LoadingSpinner from "../LoadingSpinner";

// const isbn = primary_isbn10;
 
class Book extends Component{
    state = {
        bookInfo: [],
        bookSummary:undefined,
        bookAuthor:undefined,
        bookReview:undefined,
        bookImage:undefined,
        bookIsbn:undefined,
        loading:true
    }



    componentWillMount(){
        axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${this.props.match.params.primary_isbn13}&api-key=5c73f11456c44cb8a5f8995905412eb2`).then((response) =>{
            console.log(response)
            this.setState({
                bookInfo: response.data.results[0].book_title,
                bookSummary: response.data.results[0].summary,
                bookAuthor: response.data.results[0].book_author,
                bookReview: response.data.results[0].url,
                bookIsbn: response.data.results[0].primary_isbn13,
                loading: false
            })
        }).catch((error) => {
            console.log(error)
            this.props.history.push('/book-yet-to-be-reviewed')
        })
        

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
                    <div key={this.state.primary_isbn13} className="container">
                        <div className="row">
                            <div className="col">
                                <h3>{this.state.bookInfo}</h3>
                                <p className="">By {this.state.bookAuthor}</p>
                                <span>{this.state.bookSummary}</span>
                                {/* <iframe src={this.state.bookReview}></iframe> */}
                                <a href={this.state.bookReview} className='btn btn-primary'>READ MORE</a>
                            </div>           
                        </div>
                   </div>
                    }
                </div>
        )
    }
}



export default Book;