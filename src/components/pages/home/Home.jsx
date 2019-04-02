import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import Footer from "../Footer/Footer";
import LoadingSpinner from "../LoadingSpinner";


class Home extends Component {
	state = {
		bookInfo: [],
		sportBooks: [],
		hardcoverBooks: [],
		fiction: [],
		nonFiction:[],
		loading:true
	};
	componentWillMount() {
		const overviewPromise = axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=kD4CobbkQrz69Gsp5APE9OmxTfZP0J9c");

		overviewPromise.then(response => {
			const bookList = response.data.results.lists
			const sportBooks = bookList.filter(e => e.list_name.includes('Sports'))
			const hardcoverBookLists = bookList.filter(e => e.list_name.includes('Hardcover'))
			const fictionBookLists = bookList.filter(e => e.list_name.includes('Fiction'))
			const nonFictionBookLists = bookList.filter(e => e.list_name.includes('Nonfiction'))

			this.setState({
				//    bookImage: response.data.results.lists[0].books[0].book_image,
				//    bookTitle: response.data.results.lists[0].books[0].title
				bookInfo: this.getRandomBooks(bookList).books,
				sportBooks: this.getRandomBooks(bookList).books,
				hardcoverBooks: this.getRandomBooks(hardcoverBookLists).books,
				fiction: this.getRandomBooks(fictionBookLists).books,
				nonFiction: this.getRandomBooks(nonFictionBookLists).books,
				loading:false
			})
		});
	};
	getRandomBooks = (booklist) => {
		return booklist[Math.floor(Math.random() * booklist.length)]
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

	getSportBooks = () => {
		const bookInfo = this.state.sportBooks;

		const BookInfoJsx = bookInfo.map(book => {
			return (
				<div key={book.title} className="col">
					<div className="card-deck mb-3 text-center">
						<div className="card mb-4 shadow-sm">
							<div className="card-header">
							</div>
							<div className="card-body">
								<Link to={`/book/${book.title}/${book.primary_isbn13}`}><img className="card-img-top" src={book.book_image}></img></Link>
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

	getHardcoverBooks = () => {
		const bookInfo = this.state.hardcoverBooks;
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

	getNonFictionBooks = () => {
		const bookInfo = this.state.nonFiction;
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
	getfictionBooks = () => {
		const bookInfo = this.state.fiction;
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
			// navigation
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
				{/* end of navigation */}

				{/* Header */}
				<div className="header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
					<h1 className="display-4">Welcome To BookBrowse</h1>
					<p className="lead">Your One Stop Resource For Books That Entertain, Enligten And Enagage.</p>
				</div>
				{/* end of header */}

				{/* section */}
				{loading ? <LoadingSpinner/> :
				<div className="container">
					<h5>Top picks</h5>
					<div className="row justify-content-center">
						{this.getBooks()}
					</div>
					<h5>Sports</h5>
					<div className="row justify-content-center">
						{this.getSportBooks()}
					</div>
					<h5>Fictions</h5>
					<div className="row justify-content-center">
						{this.getfictionBooks()}
					</div>
					<h5>NonFiction Books</h5>
					<div className="row justify-content-center">
						{this.getNonFictionBooks()}
					</div>
				</div>
				}
					<Footer/>

			</div>
		)
	}
}

export default Home;