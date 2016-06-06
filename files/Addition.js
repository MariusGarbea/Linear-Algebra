import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, Grid, Row, Col} from 'react-bootstrap';

const Addition = () => (
  <div>
    <h1 className="title">Calculator</h1>
    <h2 className="title">Matrices Addition</h2>
    <PlusCalc />
    <h2 className="mathquotes"><i>Pure mathematics is, in its way, the poetry of logical ideas. ~ Albert Einstein</i></h2>
  </div>
)

class PlusCalc extends React.Component {

  solve() {
    var r1 = [], r2 = [], result = "";
    var mat1 = document.getElementById("matrix1").value.split(/\s+/);
    var mat2 = document.getElementById("matrix2").value.split(/\s+/);
    var nrC1 = document.getElementById("columnsNumber1").value;
    var nrC2 = document.getElementById("columnsNumber2").value;
    var nrL1 = document.getElementById("rowsNumber1").value;
    var nrL2 = document.getElementById("rowsNumber2").value;
    var L1 = parseInt(nrL1, 10);
    var L2 = parseInt(nrL2, 10);
    var C1 = parseInt(nrC1, 10);
    var C2 = parseInt(nrC2, 10);
    while(mat1[0]) {
          r1.push(mat1.splice(0, C1));
    }
    while(mat2[0]) {
          r2.push(mat2.splice(0, C2));
    }
    if(L1 !== L2 || C1 !== C2) {
      document.getElementById("rez").value="Matrices must have the same size.";
    }
    else {
        for(let i=0; i<L1; i++) {
          for(let j=0; j<C1; j++) {
            let a = parseInt(r1[i][j]);
            let b = parseInt(r2[i][j]);
            b = a + b;
            result += b.toString() + " ";
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
        <Col md={4} xs={12}>
          <FormGroup controlId="matrix2">
           <ControlLabel className="controllabel">Matrix 2</ControlLabel>
           <FormControl componentClass="textarea" placeholder="Matrix 2 elements separated by space" style={{margin: "auto"}} />
          </FormGroup>
          <input id="rowsNumber2" type="number" placeholder="Rows" min = "1" max = "10"/>
          <input id="columnsNumber2" type="number" placeholder="Columns" min = "1" max = "10"/>
         </Col>
         <Col md={4} xs={12}>
          <FormGroup controlId="rez">
           <ControlLabel className="controllabel">Resulting Matrix</ControlLabel>
           <FormControl componentClass="textarea" placeholder="Result" style={{margin: "auto"}} />
          </FormGroup>
         </Col>
        </Row>
        <Button bsClass="bttn" style={{width: "200px"}} onClick={this.solve}>Add the Matrices</Button>
       </Grid>
    	</form>
    )
  }
}

export default Addition
