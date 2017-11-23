import React, { Component } from 'react';
import './style.css';

class Skill extends Component {
	constructor(props){
		super();
	}
    render(){
    	return(<div>
    		<div className="black-banner" ><p>Skills</p></div>
    		
    		<ul className="col-md-6 col-sm-6 col-xs-6">
    			<p><strong>Technical</strong></p>
    			<li>C</li>
    			<li>java</li>
    			<li>html</li>
    			<li>CSS</li>
    			<li>javascript</li>
    			<li>react JS</li>
    		</ul>
    		
    		<ul className="col-md-6 col-sm-6 col-xs-6">
    			<p><strong>Non technical</strong></p>
    			<li>effortless speaking</li>
    			<li>team player</li>
    			<li>creative thinking</li>
    		</ul>
    		</div>
    		);
    }
}

export default Skill;