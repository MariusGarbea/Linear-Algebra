import React from 'react';
import {Button} from 'react-bootstrap';

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      answered: false
    }
  }

  check() {
    this.setState({
      answered: true
    });
  }

  render () {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Quiz</h1>
        <form style={{fontSize: "20px", margin: "5%"}}>
          <img src="multimedia/q1.jpg"/>
          <div style={{marginTop: "10px"}}><input type="radio" name="q1" value="1" id="11" style={{marginRight: "10px"}}/>132 {(this.state.answered && document.getElementById('11').checked) ? <i className="fa fa-check" aria-hidden="true" style={{color: "green"}}/>: ""}</div>
          <div><input type="radio" name="q1" value="2" id="12" style={{marginRight: "10px"}}/>128 {(this.state.answered && document.getElementById('12').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q1" value="3" id="13" style={{marginRight: "10px"}}/>134 {(this.state.answered && document.getElementById('13').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q1" value="4" id="14" style={{marginRight: "10px"}}/>44 {(this.state.answered && document.getElementById('14').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <br />
          <img src="multimedia/q2.jpg"/>
          <div style={{marginTop: "10px"}}><input type="radio" name="q2" value="1" id="21" style={{marginRight: "10px"}}/><img src="multimedia/q21.jpg"/> {(this.state.answered && document.getElementById('21').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q2" value="2" id="22" style={{marginRight: "10px"}}/><img src="multimedia/q22.jpg"/> {(this.state.answered && document.getElementById('22').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q2" value="3" id="23" style={{marginRight: "10px"}}/><img src="multimedia/q20.jpg"/> {(this.state.answered && document.getElementById('23').checked) ? <i className="fa fa-check" aria-hidden="true" style={{color: "green"}}/>: ""}</div>
          <div><input type="radio" name="q2" value="4" id="24" style={{marginRight: "10px"}}/><img src="multimedia/q23.jpg"/> {(this.state.answered && document.getElementById('24').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <br />
          <img src="multimedia/q3.jpg"/>
          <div style={{marginTop: "10px"}}><input type="radio" name="q3" value="1" id="31" style={{marginRight: "10px"}}/>x<span>1</span> = -32; x<span>2</span> = -2; x<span>3</span> = 17.8 {(this.state.answered && document.getElementById('31').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q3" value="2" id="32" style={{marginRight: "10px"}}/>x<span>1</span> = -36; x<span>2</span> = -2.1; x<span>3</span> = 18.5 {(this.state.answered && document.getElementById('32').checked) ? <i className="fa fa-check" aria-hidden="true" style={{color: "green"}}/>: ""}</div>
          <div><input type="radio" name="q3" value="3" id="33" style={{marginRight: "10px"}}/>x<span>1</span> = 17; x<span>2</span> = 4; x<span>3</span> = 22.3 {(this.state.answered && document.getElementById('33').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q3" value="4" id="34" style={{marginRight: "10px"}}/>x<span>1</span> = 13; x<span>2</span> = 6; x<span>3</span> = 24.7 {(this.state.answered && document.getElementById('34').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <br />
          <img src="multimedia/q4.jpg"/>
          <div style={{marginTop: "10px"}}><input type="radio" name="q4" value="1" id="41" style={{marginRight: "10px"}}/> 533 {(this.state.answered && document.getElementById('41').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q4" value="2" id="42" style={{marginRight: "10px"}}/>-533 {(this.state.answered && document.getElementById('42').checked) ? <i className="fa fa-check" aria-hidden="true" style={{color: "green"}}/>: ""}</div>
          <div><input type="radio" name="q4" value="3" id="43" style={{marginRight: "10px"}}/>-602 {(this.state.answered && document.getElementById('43').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q4" value="4" id="44" style={{marginRight: "10px"}}/> 602 {(this.state.answered && document.getElementById('44').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <br />
          <img src="multimedia/q5.jpg"/>
          <div style={{marginTop: "10px"}}><input type="radio" name="q5" value="1" id="51" style={{marginRight: "10px"}}/><img src="multimedia/q51.jpg"/> {(this.state.answered && document.getElementById('51').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q5" value="2" id="52" style={{marginRight: "10px"}}/><img src="multimedia/q52.jpg"/> {(this.state.answered && document.getElementById('52').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q5" value="3" id="53" style={{marginRight: "10px"}}/><img src="multimedia/q53.jpg"/> {(this.state.answered && document.getElementById('53').checked) ? <i className="fa fa-times" aria-hidden="true" style={{color: "red"}}/>: ""}</div>
          <div><input type="radio" name="q5" value="4" id="54" style={{marginRight: "10px"}}/><img src="multimedia/q50.jpg"/> {(this.state.answered && document.getElementById('54').checked) ? <i className="fa fa-check" aria-hidden="true" style={{color: "green"}}/>: ""}</div>
          <br />
          <Button onClick={this.check.bind(this)} style={{marginTop: "10px", width: "300px"}} bsClass="bttn">Submit</Button>
        </form>
        <h2 className="mathquotes"><i>Beauty is the first test: there is no permanent place in the world for ugly mathematics. ~ G. H. Hardy</i></h2>
      </div>
    )
  }
}

export default Quiz
