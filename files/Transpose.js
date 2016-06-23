import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, Grid, Row, Col} from 'react-bootstrap';

const Transpose = () => (
  <div>
    <h1 className="title">Calculator</h1>
    <h2 className="title">Matrices Transposition</h2>
    <TransposeCalc />
    <h2 className="mathquotes"><i>Pure mathematics is, in its way, the poetry of logical ideas. ~ Albert Einstein</i></h2>
  </div>
)

class TransposeCalc extends React.Component {

  solve() {
    var r1 = [], result = "";
    var mat1 = document.getElementById("matrix1").value.split(/\s+/);
    var size = parseInt(document.getElementById("size").value, 10);
    while(mat1[0]) {
          r1.push(mat1.splice(0, size));
    }
    for(let i=0; i<size; i++) {
      for(let j=0; j<size; j++) {
        let a = parseInt(r1[j][i]);
        result += a.toString() + " ";
      }
      result += "\n";
    }
  document.getElementById("rez").value = result;
}

  render() {
    return (
     <form className="calc">
      <Grid>
       <Row>
        <Col md={4} xs={12}>
          <FormGroup controlId="matrix1">
          <ControlLabel className="controllabel">Matrix</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Matrix elements separated by space" style={{margin: "auto"}} />
         </FormGroup>
         <input id="size" type="number" placeholder="Size" min = "1" max = "100" style={{width: "200px"}}/>
        </Col>
        <Col md={4} xs={12} style={{height: "200px"}}><Button bsClass="bttn" style={{width: "200px", height: "40px", marginTop: "105px"}} onClick={this.solve}>Transpose the Matrix</Button></Col>
         <Col md={4} xs={12}>
          <FormGroup controlId="rez">
           <ControlLabel className="controllabel">Resulting Matrix</ControlLabel>
           <FormControl componentClass="textarea" placeholder="Result" style={{margin: "auto"}} />
          </FormGroup>
         </Col>
        </Row>
       </Grid>
    	</form>
    )
  }
}

export default Transpose
