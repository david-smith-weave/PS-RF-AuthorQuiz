import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero(){
  return(
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        
      </div>
    </div>
  );
}

function Turn(){
  return(
    <div></div>
  );
}

function Continue(){
  return(
    <div></div>
  );
}

function AuthorQuiz() {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn />
      <Continue />
    </div>
  );
}

export default AuthorQuiz;
