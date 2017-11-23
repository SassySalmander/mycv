import React, { Component } from 'react';
import './style.css';

class ExtraCurricular extends Component {
	constructor(props){
		super();
	}
    render(){
    	return(<div>
    		<div className="black-banner fix-margin" ><p>Extra Curricular</p></div>
    		
    		<ul>
    			<li>Photography</li>
    			<li>Painting</li>
    			<li>Debating</li>
    			<li>quizzing</li>
    		</ul>
    		</div>
    		);
    }
}

export default ExtraCurricular;