import React from 'react';
import {Button, Grid, Row, Col, Thumbnail} from 'react-bootstrap';

const About = () => (
  <div>
    <h1 style={{textAlign: "center"}}>About Us</h1>
    <div className="about">
      <p style={{padding: "5% 15%"}}>We are Diana and Marius, two prospective students currently in the 11<span>th</span> grade at the best STEM high-school in Romania:
        <i> Tudor Vianu National High-School of Computer Science.</i> <br /> <br />
        We came up with the idea of building a user-friendly platform for teaching Linear Algebra.
        By this mean, we encourage both students trying to get a better understanding of Linear Algebra and Math enthusiasts to use this site
        either to learn or test their knowledge. <br/> <br/>
        You can reach out to us here: <br/> <br/>
      </p>
      <Grid>
      <Row>
        <ThumbnailInstance name="Diana Petre" description="MetalHead"
          pic={DianaLinks.pic}
          linkfb={DianaLinks.fb} linkgh={DianaLinks.gh} linkli={DianaLinks.li}/>
        <Col md={4} />
        <ThumbnailInstance name="Marius Garbea" description="Web Technologies Enthusiast"
          pic={MariusLinks.pic}
          linkfb={MariusLinks.fb} linkgh={MariusLinks.gh} linkli={MariusLinks.li}/>
      </Row>
      </Grid>
    </div>
    <h2 className="mathquotes"><i>Mathematics is the music of reason. ~ James Joseph Sylvester</i></h2>
  </div>
)

const MariusLinks = {
  fb: "https://www.facebook.com/MariusGarbea",
  gh: "https://github.com/MariusGarbea",
  li: "https://ro.linkedin.com/in/marius-garbea-084474109",
  pic: "multimedia/marius.jpg"
}

const DianaLinks = {
  fb: "https://www.facebook.com/diana.petre.92",
  gh: "https://github.com/petrediana",
  li: "https://www.linkedin.com/in/petre-diana-b9029a122",
  pic: "multimedia/diana.jpg"
}

class ThumbnailInstance extends React.Component {
  render() {
    return (
      <Col xs={12} md={4} style={{textAlign: "center"}}>
        <Thumbnail src={this.props.pic} alt="Face Pic" style={{background: '#0065B3'}}>
          <h3 style={{color: "#FFF"}}>{this.props.name}</h3>
          <p style={{fontSize: "20px", color: "#FFF"}}><i>{this.props.description}</i></p>
          <p>
            <Button className="aboutbtn" bsClass="bttn" href={this.props.linkfb} target="_blank"><i className="fa fa-facebook" /> Facebook</Button>
            <Button className="aboutbtn" bsClass="bttn" href={this.props.linkgh} target="_blank"><i className="fa fa-github" /> GitHub</Button>
            <Button className="aboutbtn" bsClass="bttn" href={this.props.linkli} target="_blank"><i className="fa fa-linkedin" /> LinkedIn</Button>
          </p>
        </Thumbnail>
      </Col>
    )
  }
}

export default About
