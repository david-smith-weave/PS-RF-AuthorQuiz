import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero(){
  return(
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}

function Turn(){
  return(
    <div className="row turn" style={{backgroundColor: "white"}}>

    </div>
  );
}

function Continue(){
  return(
    <div></div>
  );
}

function Footer(){
  return(
    <div id="footer" className="row">
      <p className="text-muted credit">
        All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain.  
      </p>
    </div>
  )
}

function AuthorQuiz() {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
