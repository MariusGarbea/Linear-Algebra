import React from 'react';
import {Button} from 'react-bootstrap';

const Gauss = () => (
  <div>
    <h1 className="title">Calculator</h1>
    <h2 className="title">System Solver</h2>
    <div style={{background: 'url(multimedia/paper.jpg)', textAlign: "center"}}>
    <img src="multimedia/progress.jpg" className="img"/><br />
    <Button bsClass="bttn" href="multimedia/inverse.exe">Download the System Solver (C++)</Button>
    </div>
    <h2 className="mathquotes"><i>Pure mathematics is, in its way, the poetry of logical ideas. ~ Albert Einstein</i></h2>
  </div>
)

export default Gauss
