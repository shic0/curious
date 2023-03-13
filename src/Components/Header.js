import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var city= this.props.data.address.city;
      var resumeDownload_sw = this.props.data.resumedownload_sw;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a target="_blank" rel="noreferrer" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1>Hi!</h1>
            <h1 className="responsive-headline">I'm <span className="blue">{name}</span>.</h1>
            <h3>
               <span className="white">I'm a {city} based, newly graduated {occupation}
               , looking for my next adventure and opportunity to evolve and grow my backend coding skills.
               Since my graduation, I have been working as a project manager - Scrum master, for a software company, called WorkPrecision. In this project, the data is highly sensitive, and therefore very backend-heavy. Therefore my interest in the backend is greater than before and I am very excited to learn more!
               </span>
            </h3>
            <hr />
           {/*  <a href='https://shic0.github.io/resume/'>Resume</a> */}
            <ul className="social"> 
               {networks}
            </ul>
            <p>
              <a href={resumeDownload_sw} className="button" target="_blank" rel="noreferrer"><i className="fa fa-download"></i>Download Resume</a>
            </p>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   
   </header>
    );
  }
}

export default Header;
