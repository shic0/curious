import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data) {
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      //var city = this.props.data.address.city;
      //var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var resumeDownload_sw = this.props.data.resumedownload_sw;
      //var age = this.props.data.age
    }

    return (
       <section id="about">
      <div className="row about_media">
         <div className="three columns">
         
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img
                     className="img"
                     src={profilepic}
                     alt="Sherin Valestrand"
                     style={{marginBottom: '1rem', borderRadius: '55px', maxWidth: '210px'}}
                     />
                  <h2>{name}</h2>
               </div>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details" >
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank" rel="noreferrer"><i className="fa fa-download"></i>Download Resume in English</a>
                     <a href={resumeDownload_sw} className="button"target="_blank" rel="noreferrer"><i className="fa fa-download"></i>Download Resume in Swedish</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
