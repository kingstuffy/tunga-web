import React, { Component } from "react";
import "./BlogPage.scss";
import BlogHeader from "../../layout/BlogHeader/BlogHeader";
import { Container } from "reactstrap";
import Blog1 from "../../assets/img/blog/blog1.png";

class BlogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BlogPage">
        <BlogHeader/>
        <Container className="text-justify">
          <p className="content mt-5">
            We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we
            screw up this planet enough, they won't want it anymore! Hey, you know how I'm, like, always trying to save
            the planet? Here's my chance. So you two dig up, dig up dinosaurs?

            Life finds a way. God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man
            creates Dinosaurs. They're using our own satellites against us. And the clock is ticking. Hey, take a look
            at the earthlings. Goodbye! Hey, you know how I'm, like, always trying to save the planet? Here's my chance.

            So you two dig up, dig up dinosaurs? We gotta burn the rain forest, dump toxic waste, pollute the air, and
            rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Yeah, but your
            scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.

          </p>

          <img src={Blog1} alt="Blog Image" className="img-fluid w-100"/>

          <p className="content mt-5">
            My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you
            little bastard! Checkmate... We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up
            the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!

            God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.
            Must go faster... go, go, go, go, go! Hey, take a look at the earthlings. Goodbye! Yeah, but John, if The
            Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.

            You know what? It is beets. I've crashed into a beet truck. Yeah, but John, if The Pirates of the Caribbean
            breaks down, the pirates don’t eat the tourists. Yes, Yes, without the oops! Is this my espresso machine?
            Wh-what is-h-how did you get my espresso machine?

          </p>
          <div className="hr-line text-center pt-5 mt-5">
            <a className="text-primary font-weight-bold border-0">you might also like</a>
          </div>
        </Container>
      </div>
    );
  }
}

BlogPage.propTypes = {};

export default BlogPage;
