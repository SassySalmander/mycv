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
                    <h2>Master Of Computer Application</h2>
                    <p>Birla Institute Of Technology</p>
                    <p>2014 - 2017</p>
                    <p>75%</p>
                    </div>
                     <div className="school-box">
                    <h2>Bachelor Of Computer Application(WBUT)</h2>
                    <p>The Heritage Academy</p>
                    <p>2011 - 2014 </p>
                    <p>76.8%</p>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                 <div className="view-school-box">
                    <div className="school-box">
                    <h2>12th Standard (CISCE)</h2>
                    <p>Hirendra Leela Patranavis School</p>
                    <p>2009-2011</p>
                    <p>77%</p>
                    </div>
                     <div className="school-box">
                    <h2>10th Standard (CISCE)</h2>
                    <p>Lycee</p>
                    <p>2009</p>
                    <p>82%</p>
                    </div>
                </div>
                <button className="btn btn-md btn-success text-center" type="button" onClick={this.props.hideDet}>back</button>
                    
                </div>
            
    		</div>
    		);
    }
}

export default ViewSchool;