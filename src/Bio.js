import React, { Component } from 'react';
import './style.css';

class Bio extends Component {
  render() {
    return (
      <div>
      <div className="img-box text-center"><img  className="img" height="100px" width="100px" src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAfEAAAAJDA1MDEwOWEwLTc3MzItNGI1ZS04YzJkLWJlMTU3NDFkNTNmYg.jpg"/>
                </div>    
                <div className="data-box text-center">
                  <p>ANGSHUMAN NANDY</p>
                  <p>angshuman.nandy@gmail.com</p>
                  <p>+91 9163608801</p>
               </div> 
               <div className="bio-box">
               <p>A young enthusiast in the field of information and communication technology
                seeking an opportunity to work in a challenging environment to enhance my knowledge
                 and utilize my skills for the growth of the organization. I am flexible, have the 
                 zeal to learn and comfortable working in a team. </p>
                 </div>
               </div>
    );
  }
}

export default Bio;
