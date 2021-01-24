import React from 'react';
import './sass/app.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Components/Nav';
import Home from './Components/HomePage/Home';
import About from './Components/About/about';
import Product from './Components/product/product';
import Blog from './Components/blog/blog';
import SinglePost from './Components/single-post/single-post';
import ContactUs from './Components/contact-us/contact-us';
import Footer from './Components/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/product" component={Product}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/single-post" component={SinglePost}/>
      <Route path="/contact-us" component={ContactUs}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
