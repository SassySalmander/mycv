import React, { Component } from 'react';
import './style.css';
import Bio from './Bio';
import Academics from './Academics'
import Skill from './Skill'
import Project from './Project'
import ExtraCurricular from './ExtraCurricular'
import ViewSchool from './ViewSchool'
import ViewProj from './ViewProj'

function CondRend(props) {
  const showEdDetail = props.showEdDetail;
  const showprojDetail = props.showprojDetail;
  if (showEdDetail==false && showprojDetail==0) {
    return (<div>
       <div className="col-md-4 col-sm-4 col-xs-12">
       <Academics showDet={props.showDet}/>
       <Skill />
    
       </div>
          <div className="col-md-4 col-sm-4 col-xs-12"><Project showProj={props.showProj} />
          <ExtraCurricular />
          </div></div>);
  }
  else if(showprojDetail!=0 ){
    return(<div><div className="col-md-8 col-sm-8 col-xs-12"><ViewProj showProj={props.showProj} showprojDetail={props.showprojDetail}/></div></div>);
  }
  else(showEdDetail==true)
    return(<div><div className="col-md-8 col-sm-8 col-xs-12"><ViewSchool hideDet={props.hideDet}/></div></div>);
  }


class Cv extends Component {
    constructor(props){
    super(props);
    this.state=({
      showEdDetail: false,
      showprojDetail: 0

    });
  }

  showDet = () =>{
    this.setState({
      showEdDetail:true
    })
    
  }

  hideDet = () =>{
    this.setState({
      showEdDetail:false
    })
  }
showProj=(e)=> {
  let n = e.target.id;

      this.setState({
  showprojDetail: n
  })
  }

  render() {
    return (
      <div className="container">
        <div className="row base-box">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <Bio />
          </div>
          <CondRend showprojDetail={this.state.showprojDetail} showEdDetail={this.state.showEdDetail} showProj={this.showProj} hideDet={this.hideDet} showDet={this.showDet} />
        </div>
      </div>
    );
  }
}

export default Cv;
