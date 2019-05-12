import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Default.scss';
import AboutUs from "../../home/AboutUs/AboutUs";

class Default extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Default">
          <AboutUs />
      </div>
    );
  }
}
Default.propTypes = {
}

export default Default;
