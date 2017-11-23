import React, { Component } from 'react';
import './style.css';

class Project extends Component {
  render() {
    return(<div className="project-box">
        <div className="black-banner" ><p>Projects</p></div>
        
       <table className="table table-inverse">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Languages</th>
       <th scope="col">year</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>CoDecode</td>
      <td>Android</td>
      <td>2013</td>
      <td id="1" type="button" className="btn btn-warning" onClick={this.props.showProj}>details</td>

    </tr>

     <tr>
      <td>Speako</td>
      <td>C#</td>
      <td>2014</td>
      <td id="2" type="button" className="btn btn-warning" onClick={this.props.showProj}>details</td>
    </tr>
    <tr>
      <td>Automated Lights</td>
      <td>python,js,html</td>
      <td>2016</td>
      <td id="3" type="button" className="btn btn-warning" onClick={this.props.showProj}>details</td>
    </tr>
    <tr>
      <td>Insurance manager</td>
      <td>Ruby on rails</td>
      <td>2017</td>
      <td id="4" type="button" className="btn btn-warning" onClick={this.props.showProj}>details</td>
    </tr>
     <tr>
      <td>Multistep registration</td>
      <td>React JS</td>
      <td>2017</td>
      <td id="5" type="button" className="btn btn-warning" onClick={this.props.showProj}>details</td>
    </tr>
   
    
  </tbody>
</table>
        </div>
        );
  }
}

export default Project;
