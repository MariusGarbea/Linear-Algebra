import React from 'react';
import {Button} from 'react-bootstrap';

const Inverse = () => (
  <div>
    <h1 style={{textAlign: "center"}} className="calctext">Calculator</h1>
    <h2 style={{textAlign: "center"}} className="calctext">Matrix Inversion</h2>
    <div style={{background: 'url(multimedia/paper.jpg)'}}>
    <img src="multimedia/progress.jpg" className="img" />
    <Button bsClass="bttn" href="multimedia/inverse.exe">Download the Matrix Inverse Calculator (C++)</Button>
    </div>
    <h2 className="mathquotes"><i>Pure mathematics is, in its way, the poetry of logical ideas. ~ Albert Einstein</i></h2>
  </div>
)

export default Inverse
