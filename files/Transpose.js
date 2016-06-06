import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, Grid, Row, Col} from 'react-bootstrap';

const Transpose = () => (
  <div>
    <h1 style={{textAlign: "center"}} className="calctext">Calculator</h1>
    <h2 style={{textAlign: "center"}} className="calctext">Matrices Transposition</h2>
    <TransposeCalc />
    <h2 className="mathquotes"><i>Pure mathematics is, in its way, the poetry of logical ideas. ~ Albert Einstein</i></h2>
  </div>
)

class TransposeCalc extends React.Component {

  solve() {
    var r1 = [], result = "";
    var mat1 = document.getElementById("matrix1").value.split(/\s+/);
    var nrC1 = document.getElementById("columnsNumber1").value;
    var nrL1 = document.getElementById("rowsNumber1").value;
    var L1 = parseInt(nrL1, 10);
    var C1 = parseInt(nrC1, 10);
    while(mat1[0]) {
          r1.push(mat1.splice(0, C1));
    }
    if(L1 !== C1) {
      document.getElementById("rez").value="Matrix is not a Square Matrix.";
    }
    else {
        for(let i=0; i<L1; i++) {
          for(let j=0; j<C1; j++) {
            let a = parseInt(r1[j][i]);
            result += a.toString() + " ";
          }
          result += "\n";
        }
      document.getElementById("rez").value = result;
      }
    }

  render() {
    return (
     <form style={{textAlign: "center", paddingTop: "20vh", paddingBottom: "20vh", background: "url(multimedia/paper.jpg)"}}>
      <Grid>
       <Row>
        <Col md={4} xs={12}>
          <FormGroup controlId="matrix1">
          <ControlLabel className="controllabel">Matrix 1</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Matrix 1 elements separated by space" style={{margin: "auto"}} />
         </FormGroup>
         <input id="rowsNumber1" type="number" placeholder="Rows" min = "1" max = "10"/>
         <input id="columnsNumber1" type="number" placeholder="Columns" min = "1" max = "10"/>
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
