import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, Grid, Row, Col} from 'react-bootstrap';

const Gauss = () => (
  <div>
    <h1 className="title">Calculator</h1>
    <h2 className="title">System Solver</h2>
    <GaussCalc />
    <h2 className="mathquotes"><i>Pure mathematics is, in its way, the poetry of logical ideas. ~ Albert Einstein</i></h2>
  </div>
)

class GaussCalc extends React.Component {

  solve() {
    var A = [], result = "";
    var mat1 = document.getElementById("matrix1").value.split(/\s+/);
    var constants = document.getElementById("constants").value.split(/\s+/);
    var size = parseInt(document.getElementById("size").value, 10);
    for(var i=0; i<size; i++) {
      mat1.splice((i+1)*size+i, 0, constants[i]);
    }
    while(mat1[0]) {
      A.push(mat1.splice(0, size+1));
    }
    for(var i=0; i<size; i++) {
      var maxElement = Math.abs(parseInt(A[i][i]));
      var maxRow = i;
      for(var k=i+1; k<size; k++) {
        if(Math.abs(A[k][i]) > maxElement) {
          maxElement = Math.abs(A[k][i]);
          maxRow = k;
        }
      }
      for(var k=i; k<size+1; k++) {
        var aux = parseInt(A[maxRow][k]);
        A[maxRow][k] = A[i][k];
        A[i][k] = aux;
      }
      for(k=i+1; k<size; k++) {
        var c = -A[k][i]/A[i][i];
        for(var j=i; j<size+1; j++) {
          if (i == j) {
            A[k][j] = 0;
          }
          else {
            A[k][j] += c * A[i][j];
          }
        }
      }
    }
  var rez = new Array(size);
  for(var i=size-1; i>-1; i--) {
    rez[i] = A[i][size]/A[i][i];
    result += rez[i] + '\n';
    for(var k=i-1; k>-1; k--) {
      A[k][size] -= A[k][i]*rez[i];
    }
  }
  document.getElementById("rez").value = result;
}

  render() {
    return (
     <form className="calc">
      <Grid>
       <Row>
        <Col md={3} xs={12}>
         <FormGroup controlId="matrix1">
          <ControlLabel className="controllabel">Matrix</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Matrix elements separated by space" style={{margin: "auto"}} />
         </FormGroup>
         <input id="size" type="number" placeholder="Size" min = "1" max = "100" style={{width: "200px"}}/>
        </Col>
        <Col md={3} xs={12}>
        <FormGroup controlId="constants">
         <ControlLabel className="controllabel">Constants</ControlLabel>
         <FormControl componentClass="textarea" placeholder="The Constants of the System" style={{margin: "auto"}} />
        </FormGroup>
        </Col>
        <Col md={3} xs={12} style={{height: "200px"}}><Button bsClass="bttn" style={{width: "200px", height: "40px", marginTop: "105px"}} onClick={this.solve}>Solve the System</Button></Col>
         <Col md={3} xs={12}>
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

export default Gauss
