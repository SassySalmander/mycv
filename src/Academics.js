import React, { Component } from 'react';
import './style.css';

class Academics extends Component {
	constructor(props){
		super();
	}
    render(){
    	return(
    		<div className="academic-box" >
    		<div className="black-banner" ><p>Academic Qualifications</p></div>
    		<table className="table table-inverse">
  <thead>
    <tr>
      <th scope="col">degree</th>
      <th scope="col">Institute</th>
      <th scope="col">marks</th>
      <th scope="col">year</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>MCA</td>
      <td>BIT</td>
      <td>75%</td>
      <td>2017</td>
    </tr>

     <tr>
      <td>BCA</td>
      <td>THA</td>
      <td>76.8%</td>
      <td>2014</td>
    </tr>
    <tr>
      <td>12</td>
      <td>HLPS</td>
      <td>77%</td>
      <td>2011</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Lycee</td>
      <td>82%</td>
      <td>2009</td>
    </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><button className="click-for-more btn btn-warning text-center" type="button" onClick={this.props.showDet} >details</button></td>
    </tr>
   
    
  </tbody>
</table>
 </div>


    		);
    }
}


export default Academics;