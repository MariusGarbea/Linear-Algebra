import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, Grid, Row, Col} from 'react-bootstrap';

const Power = () => (
  <div>
    <h1 className="title">Calculator</h1>
    <h2 className="title">Matrix Power</h2>
    <PowerCalc />
    <h2 className="mathquotes"><i>Pure mathematics is, in its way, the poetry of logical ideas. ~ Albert Einstein</i></h2>
  </div>
)

class PowerCalc extends React.Component {

  solve() {
    var r1 = [], r2 = [], r3 = [], c, result = "";
    var mat1 = document.getElementById("matrix1").value.split(/\s+/);
    var size = parseInt(document.getElementById("size").value, 10);
    var power = document.getElementById("power").value;
    while(mat1[0]) {
      r1.push(mat1.splice(0, size));
    }
    r2 = JSON.parse(JSON.stringify(r1));
    for(let a=0; a<power-1; a++) {
      r3.length = 0;
      result = '';
      for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
          c = 0;
          for(let k=0; k<size; k++) {
            let a = parseInt(r1[i][k]);
            let b = parseInt(r2[k][j]);
            c += a*b;
          }
          result += c + ' ';
          r3.push(c);
        }
        result += "\n";
      }
      for(let m in r2) {
        for(let n in r2) {
          r2[m][n] = r3[n];
        }
      }
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
         <input id="size" type="number" placeholder="Size" min = "1" max = "1000" style={{width: "200px"}}/>
        </Col>
        <Col md={4} xs={12} style={{height: "200px"}}>
          <input id="power" type="number" placeholder="Power" min = "1" max = "1000"/>
          <Button bsClass="bttn" style={{width: "200px", height: "40px", marginTop: "105px"}} onClick={this.solve}>Power the Matrix</Button>
        </Col>
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

export default Power
