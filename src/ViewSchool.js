import React, { Component } from 'react';
import './style.css';

class ViewSchool extends Component {
	constructor(props){
		super();
	}
    render(){
    	return(<div>
    		<div className="col-md-6 col-sm-6 col-xs-12">
                <div className="view-school-box">
                    <div className="school-box">
                    <div className="black-banner"><p>Master Of Computer Application</p></div>
                    <img className="text-center" height="150px" width="150x" src="https://bitmesra.ac.in/icem/logo/bitlogo.png" />
                    <p><strong>Birla Institute Of Technology</strong></p>
                    <p><strong>2014 - 2017 </strong></p>
                    <p><strong> 75% </strong></p>
                    </div>
                     <div className="school-box">
                    <div className="black-banner"><p>Bachelor Of Computer Application(WBUT)</p></div>
                    <img className="text-center" height="150px" width="150x" src="http://www.tha.edu.in/images/THA_Logo.png" />
                    <p><strong>The Heritage Academy</strong></p>
                    <p><strong>2011 - 2014 </strong></p>
                    <p><strong> 76.8% </strong></p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="view-school-box">
                    <div className="school-box">
                    <div className="black-banner"><p>12th Standard (CISCE)</p></div>
                    <img className="text-center" height="100px" width="200x" src="https://pl.respaper.com/160/s.95cf3b4666.jpg" />
                    <p><strong>Hirendra Leela Patranavis School</strong></p>
                    <p><strong>2009-2011 </strong></p>
                    <p><strong> 77% </strong></p>
                    </div>
                     <div className="school-box set-margin">
                    <div className="black-banner"><p>10th Standard (CISCE)</p></div>
                    <img className="text-center" height="150px" width="300x" src="https://lycee.edu.in/wp-content/uploads/2017/06/llllll.png" />
                    <p><strong>Lycee</strong></p>
                    <p><strong>2009 </strong></p>
                    <p><strong> 82% </strong></p>
                    </div>
                </div>
            </div>
            <button className="btn btn-md btn-success" type="button" onClick={this.props.hideDet}>back</button>
    		</div>
    		);
    }
}

export default ViewSchool;