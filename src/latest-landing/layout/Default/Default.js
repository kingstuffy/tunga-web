import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Default.scss';

class Default extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Default">
            Default Body
      </div>
    )
  }
}
Default.propTypes = {
}

export default Default;
