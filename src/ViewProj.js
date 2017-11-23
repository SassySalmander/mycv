import React, { Component } from 'react';
import './style.css';

function CondRend(props) {
  const showprojDetail = props.showprojDetail;
  if (showprojDetail==1) {
    return (<div>
            <div className="proj-box">
                <h2> CoDeCode</h2>
                <p><strong>Company/Institute :</strong> Ardent computech pvt ltd</p>
                <p><strong>Role :</strong> Design,coding,implementation</p>
                <p><strong>Description :</strong> CoDeCode is a messaging app for android devices which helps in sending encrypted messages. Messages encrypted using this app are decoded using the same app in reciever's device. This project was built as a part of the learning exercise. </p>
                <p><strong>Language/technology used :</strong> Android</p>
                <p><strong>Duration :</strong> June, 2013 to July, 2013 </p>
                <button id="0" type="button" className="btn btn-warning" onClick={props.showProj}>back</button>
            </div>
        </div>);
  }
  if (showprojDetail==2) {
    return (<div>
            <div className="proj-box">
                <h2> Speako</h2>
                <p><strong>Company/Institute :</strong> The Heritage Academy</p>
                <p><strong>Role :</strong> Design,coding,implementation</p>
                <p><strong>Description :</strong> Speako is a virtual assistant which can talk back to the user. it can also take voice command and perform functions like taking screenshots,taking pictures,displaying pictures,playing music etc. it also has an attractive GUI </p>
                <p><strong>Language/technology used :</strong> speech recognition and synthesis using C# programming language</p>
                <p><strong>Duration :</strong> November, 2013 to April, 2014 </p>
                 <button id="0" type="button" className="btn btn-warning" onClick={props.showProj}>back</button>
            </div>
        </div>);
  }
   if (showprojDetail==3) {
    return (<div>
            <div className="proj-box">
                <h2> Automated lighting system</h2>
                <p><strong>Company/Institute :</strong> Personal(hobby project)</p>
                <p><strong>Role :</strong> designer,implementer,researcher</p>
                <p><strong>Description :</strong> Automated lighting system was developed keeping in mind the prospect of saving energy. sensor driven technology can capture motion in a room and light up automatically. light is turned off shortly if no motion is detected. </p>
                <p><strong>Language/technology used :</strong> raspberry pi,python,sensors,relay</p>
                <p><strong>Duration :</strong> July, 2015 to July, 2015 </p>
                 <button id="0" type="button" className="btn btn-warning" onClick={props.showProj}>back</button>
            </div>
        </div>);
  }
   if (showprojDetail==4) {
    return (<div>
            <div className="proj-box">
                <h2>Insurance Manager</h2>
                <p><strong>Company/Institute :</strong> Birla Institute Of Technology</p>
                <p><strong>Role :</strong> Designer of backend and frontend</p>
                <p><strong>Description :</strong> Insurance Manager is an E-management system which allows users to buy insurance policies and maintain them. Admins are responsible for adding new companies, new type of insurance policies and maintaining uers. this project was built as a part of learning exercise</p>
                <p><strong>Language/technology used :</strong> Ruby on Rails</p>
                <p><strong>Duration :</strong> February, 2017 to May, 2017 </p>
                <p><strong>Github link :</strong> <a href="https://github.com/angshuman-nandy/insurance-manager-new" target="_blank">Insurance Manager</a></p>
                 <button id="0" type="button" className="btn btn-warning" onClick={props.showProj}>back</button>
            </div>
        </div>);
  }
   if (showprojDetail==5) {
    return (<div>
            <div className="proj-box">
                <h2> Multistep Registration</h2>
                <p><strong>Company/Institute :</strong> personal</p>
                <p><strong>Role:</strong> designer,implementer</p>
                <p><strong>Description:</strong> It is a registration form distributed in 4 different steps, basic information,education information, professional information and confirmation. Fields were validated for invalid inputs. progressbar to show the completion percentage is provided. this project was developed as a part of the learning experience for React JS</p>
                <p><strong>Language/technology used:</strong>React JS</p>
                <p><strong>Duration:</strong>November, 2017 to November, 2017 </p>
                <p><strong>Github link :</strong> <a href="https://github.com/angshuman-nandy/multistep-registration" target="_blank">Multistep Registration</a></p>
                <p><strong>Live Demo link :</strong> <a href="https://multistep-registration.herokuapp.com" target="_blank">demo</a></p>
                 <button id="0" type="button" className="btn btn-warning" onClick={props.showProj}>back</button>
            </div>
        </div>);
  }
  else{
    return(<div></div>);
  }
  return(<div>hi</div>);
  }

class ViewProj extends Component {
	constructor(props){
		super();
	}
    render(){
    	return(
        <CondRend showprojDetail={this.props.showprojDetail} showProj={this.props.showProj}/>
    		);
        }
    }


export default ViewProj;