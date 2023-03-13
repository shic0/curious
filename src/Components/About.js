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
            </div>
         </div>
         <div className="nine columns main-col">
            <div style={{alignItems: "center"}}>
            <h2 style={{color: "white"}}>About Me</h2>
            <h3></h3>
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details" >
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
            </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
