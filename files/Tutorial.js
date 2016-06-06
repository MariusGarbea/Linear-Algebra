import React from 'react';
import {Button} from 'react-bootstrap';

const Tutorial = () => (
  <div>
    <h1 className="title">Tutorial</h1>
    <div className="wlcm" style={{paddingTop: "5%", paddingBottom: "5%"}}>
      <p>Real numbers can be used to convey one-dimensional information, such as a family’s total expenditure in a month.
        However, if one wants to record the monthly expenditures of two families on three items — food, entertainment, and health — then one needs to use a rectangular array of real numbers, or a matrix.
        A matrix (A) is defined as a rectangular array of numbers, parameters, or variables. The members of the array are referred to as the elements of the matrix and are usually enclosed in brackets, parentheses, or double vertical lines.</p><br />
      <p>Matrix operations satisfy certain mathematical laws: <br /> <br />
        <li>A + (B+C) = (A+B) + C (associative law for addition)</li> <br />
        <li>A*(B*C) = (A*B)*C (associative law for multiplication)</li> <br />
        <li>A + B = B + A (commutative law)</li> <br />
        <li>x*(A+B) = x*A + x*B, where x is a scalar (distributive law for scalar products)</li> <br />
        <li>C*(A+B) = C*A + C*B, provided the products are defined (distributive law for matrix multiplication)</li> <br />
      </p>
      <Button bsClass="bttn" href="../multimedia/matrici.jpg">Download our Cheat Sheet</Button>
    </div>
    <h2 className="mathquotes"><i>In mathematics the art of proposing a question must be held of higher value than solving it. ~ Georg Cantor</i></h2>
  </div>
)

export default Tutorial
