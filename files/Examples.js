import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Examples = () => (
  <div>
    <h1 style={{textAlign: "center"}}>Examples</h1>
    <Grid fluid>
      <Row><Col md={8} xs={12}><img src="multimedia/addition.jpg" /></Col><Col md={4} xs={12}><h2 style={{display: "inline"}}>Addition of 2 Matrices</h2></Col></Row><br /><hr className="style-one" />
      <Row><Col md={8} xs={12}><img src="multimedia/subtraction.jpg" /></Col><Col md={4} xs={12}><h2 style={{display: "inline"}}>Subtraction of 2 Matrices</h2></Col></Row><br /><hr className="style-one" />
      <Row><Col md={8} xs={12}><img src="multimedia/multiplication.jpg" /></Col><Col md={4} xs={12}><h2 style={{display: "inline"}}>Multiplication of 2 Matrices</h2></Col></Row><br /><hr className="style-one" />
      <Row><Col md={8} xs={12}><img src="multimedia/power.jpg" /></Col><Col md={4} xs={12}><h2 style={{display: "inline"}}>Power of a Matrix</h2></Col></Row><br /><hr className="style-one" />
      <Row><Col md={8} xs={12}><img src="multimedia/transpose.jpg" /></Col><Col md={4} xs={12}><h2 style={{display: "inline"}}>Transpose of a Matrix</h2></Col></Row><br /><hr className="style-one" />
      <Row><Col md={8} xs={12}><img src="multimedia/inverse.jpg" /></Col><Col md={4} xs={12}><h2 style={{display: "inline"}}>Inverse of a Matrix</h2></Col></Row><hr className="style-one" />
    </Grid>
    <h2 className="mathquotes"><i>God exists since mathematics is consistent, and the Devil exists since we cannot prove it. ~ Andre Weil</i></h2>
  </div>
)

export default Examples
