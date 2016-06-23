import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, Grid, Row, Col} from 'react-bootstrap';

const Inverse = () => (
  <div>
    <h1 className="title">Calculator</h1>
    <h2 className="title">Matrix Inverse</h2>
    <InverseCalc />
    <h2 className="mathquotes"><i>Pure mathematics is, in its way, the poetry of logical ideas. ~ Albert Einstein</i></h2>
  </div>
)

class InverseCalc extends React.Component {

  solve() {
    document.getElementById("rez").value = '';
    var M = [];
    var mat1 = document.getElementById("matrix1").value.split(/\s+/);
    var dim = parseInt(document.getElementById("size").value, 10);
    while(mat1[0]) {
      M.push(mat1.splice(0, dim));
    }
    var i = 0, ii = 0, j = 0, e = 0, t = 0;
    var I = [], C = [];
    for(i=0; i<dim; i++){
        I[I.length] = [];
        C[C.length] = [];
        for(j=0; j<dim; j++){
            if(i == j) {
              I[i][j] = 1;
            }
            else {
              I[i][j] = 0;
            }
            C[i][j] = M[i][j];
        }
    }
    for(i=0; i<dim; i++) {
        e = C[i][i];
        if(e == 0) {
            for(ii=i+1; ii<dim; ii++) {
                if(C[ii][i] != 0) {
                    for(j=0; j<dim; j++) {
                        e = C[i][j];
                        C[i][j] = C[ii][j];
                        C[ii][j] = e;
                        e = I[i][j];
                        I[i][j] = I[ii][j];
                        I[ii][j] = e;
                    }
                    break;
                }
            }
            e = C[i][i];
            if(e == 0) {
              document.getElementById("rez").value = "Matrix not invertable";
              return;
            }
        }
        for(j=0; j<dim; j++) {
            C[i][j] = C[i][j]/e;
            I[i][j] = I[i][j]/e;
        }
        for(ii=0; ii<dim; ii++) {
            if(ii == i) {
              continue;
            }
            e = C[ii][i];
            for(j=0; j<dim; j++) {
                C[ii][j] -= e*C[i][j];
                I[ii][j] -= e*I[i][j];
            }
        }
    }
    for(i=0; i<dim; i++) {
      for(j=0; j<dim; j++) {
        document.getElementById("rez").value += I[i][j] + ' ';
      }
      document.getElementById("rez").value += '\n';
    }
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
        <Col md={4} xs={12} style={{height: "200px"}}><Button bsClass="bttn" style={{width: "200px", height: "40px", marginTop: "105px"}} onClick={this.solve}>Inverse the Matrix</Button></Col>
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

export default Inverse
