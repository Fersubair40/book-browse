import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from "./components/pages/home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Science from './components/pages/science/Science';
import Business from './components/pages/Business/Business';
import Sport from './components/pages/Sport/Sport';
import Book from './components/pages/Book/Book'
import NotFound from './components/pages/NotFound/NotFound';




ReactDOM.render(
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/science" component={Science}/>
      <Route path = "/business"component={Business}/>
      <Route path = "/picture"component={Sport}/>
      <Route path = "/bookInfo/:primary_isbn13"component={Book}/>
      <Route exact path = "/book-yet-to-be-reviewed"component={NotFound}/>
    </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
