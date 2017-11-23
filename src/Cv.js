import React, { Component } from 'react';
import './style.css';
import Bio from './Bio';
import Academics from './Academics'
import Skill from './Skill'
import Project from './Project'
import ExtraCurricular from './ExtraCurricular'
import ViewSchool from './ViewSchool'

function Greeting(props) {
  const showEdDetail = props.showEdDetail;
  if (showEdDetail) {
    return (<div>
       <div className="col-md-4 col-sm-4 col-xs-12">
       <Academics showDet={props.showDet}/>
       <Skill />
    
       </div>
          <div className="col-md-4 col-sm-4 col-xs-12"><Project />
          <ExtraCurricular />
          </div></div>);
  }
  else
    return(<div><div className="col-md-8 col-sm-8 col-xs-12"><ViewSchool hideDet={props.hideDet}/></div></div>);
}

class Cv extends Component {
    constructor(props){
    super(props);
    this.state=({
      showEdDetail: true,
      showprojDetail: false,

    });
  }

  showDet = () =>{
    this.setState({
      showEdDetail:false
    })
    
  }

  hideDet = () =>{
    this.setState({
      showEdDetail:true
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row base-box">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <Bio />
          </div>
          <Greeting showEdDetail={this.state.showEdDetail} hideDet={this.hideDet} showDet={this.showDet} />
        </div>
      </div>
    );
  }
}

export default Cv;
