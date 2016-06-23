import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Nav, FormGroup, FormControl, Button, Glyphicon, OverlayTrigger, Popover} from 'react-bootstrap';
import {hashHistory, Router, Route, IndexRoute, Link} from 'react-router';
import Welcome from './Welcome';
import Tutorial from './Tutorial';
import Examples from './Examples';
import Quiz from './Quiz';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Power from './Power';
import Transpose from './Transpose';
import Inverse from './Inverse';
import Gauss from './Gauss';
import About from './About';
import Fun from './Fun';

const App = () => (
  <Router history={hashHistory} >
   <Route path="/" component={Toolbar} >
    <IndexRoute component={Welcome} />
    <Route path="tutorial" component={Tutorial} />
    <Route path="examples" component={Examples} />
    <Route path="quiz" component={Quiz} />
    <Route path="calculator/addition" component={Addition} />
    <Route path="calculator/subtraction" component={Subtraction} />
    <Route path="calculator/multiplication" component={Multiplication} />
    <Route path="calculator/power" component={Power} />
    <Route path="calculator/transpose" component={Transpose} />
    <Route path="calculator/inverse" component={Inverse} />
    <Route path="calculator/gauss" component={Gauss} />
    <Route path="about" component={About} />
    <Route path="fun" component={Fun} />
   </Route>
  </Router>
)

class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {condition: false}
  }

  handleClick() {
    this.setState({condition: !this.state.condition});
  }

  render() {
    return (
     <div>
     <div className={this.state.condition ? "toolbar w0" : "toolbar w1"}>
     <Button id="menu-toggle" onClick={this.handleClick.bind(this)}>{this.state.condition ?
       <i className="fa fa-times fa-2x" aria-hidden="true" /> : <i className="fa fa-bars fa-2x" aria-hidden="true" /> }
     </Button>
     <div className="tbr"> {this.state.condition ? <ToolbarMax /> : <ToolbarMin />} </div>
     </div>
     <main className={this.state.condition ? "page-content-wrapper pcw1" : "page-content-wrapper pcw0"}> {this.props.children} </main>
     </div>
    )
  }
}

const ToolbarMin = () => (
  <div>
  <Link to="tutorial"><i className="fa fa-graduation-cap fa-2x" style={{marginLeft: "-5px"}}/></Link><br/>
  <Link to="examples"><i className="fa fa-eye fa-2x"/></Link><br/>
  <Link to="quiz"><i className="fa fa-file-text-o fa-2x"/></Link><br/>
  <OverlayTrigger trigger="click" rootClose placement="right" overlay={<Popover title="Algorithms" id="popover"><Titles /></Popover>}>
    <i className="fa fa-calculator fa-2x"/>
  </OverlayTrigger><br/>
  <Link to="fun"><i className="fa fa-smile-o fa-2x"/></Link><br/>
  <Link to="about"><i className="fa fa-question-circle-o fa-2x"/></Link>
  </div>
)

const ToolbarMax = () => (
  <div>
    <img className="img-responsive" src="multimedia/toolbarpic.jpg" alt="Math! <3" />
    <p style={{fontSize: "22px", fontWeight: "bold", textAlign: "center"}}>Choose your weapon!</p>
    <Nav bsStyle="pills" stacked>
    <Link to="tutorial"><Button bsClass="bttn" style={{marginTop: "10vh"}}>Tutorial</Button></Link><br/>
    <Link to="examples"><Button bsClass="bttn">Examples</Button></Link><br/>
    <Link to="quiz"><Button bsClass="bttn">Quiz</Button></Link><br/>
    <OverlayTrigger trigger="click" rootClose placement="right" overlay={<Popover title="Algorithms" id="popover"><Titles /></Popover>}>
    <Button bsClass="bttn">Calculator</Button>
    </OverlayTrigger><br/>
    <Link to="fun"><Button bsClass="bttn">Fun Facts</Button></Link><br/>
    <Link to="about"><Button bsClass="bttn">About Us</Button></Link>
   </Nav>
  </div>
)

const Titles = () => (
  <div>
    <Link to="calculator/addition"><Button bsClass="bttn"><strong>Addition</strong></Button></Link><br />
    <Link to="calculator/subtraction"><Button bsClass="bttn"><strong>Subtraction</strong></Button></Link><br />
    <Link to="calculator/multiplication"><Button bsClass="bttn"><strong>Multiplication</strong></Button></Link><br />
    <Link to="calculator/power"><Button bsClass="bttn"><strong>Power</strong></Button></Link><br />
    <Link to="calculator/transpose"><Button bsClass="bttn"><strong>Transpose</strong></Button></Link><br />
    <Link to="calculator/inverse"><Button bsClass="bttn"><strong>Inverse</strong></Button></Link><br />
    <Link to="calculator/gauss"><Button bsClass="bttn"><strong>Solve system</strong></Button></Link>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
