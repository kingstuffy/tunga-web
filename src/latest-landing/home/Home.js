import React, { Component } from "react";
import "./Home.scss";
import { Route } from "react-router-dom";
import IconButton from "../shared/core/IconButton";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <div>
          {this.props.childRoutes.map((route, i) => {
            return (
              <Route
                exact={route.exact}
                key={i}
                render={props => (
                  <route.component
                    name={route.name}
                    {...props}
                  />
                )}
                path={route.path}
              />
            );
          })}
        </div>
        <div className="position-fixed icon-chat-bottom bg-primary">
          <IconButton
            name="chat-alt"
            size="md"
            className="text-white"
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
