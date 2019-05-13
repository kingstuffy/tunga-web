import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UseCase.scss";
import case1 from "../../../assets/img/service/service1.png";
import case2 from "../../../assets/img/service/service2.png";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import Button from "../../../shared/core/Button";

class UseCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "This is where case one title goes",
          description: "This is where case two title goes",
          imgUrl: case1
        },
        {
          title: "This is where case two title goes",
          description: "This is where case two title goes",
          imgUrl: case2
        }
      ]
    };
  }

  render() {
    return (
            <div className="UseCase">
                {this.state.data.map((info, i) => (
                    <div
                        className="case-board mt-1 position-relative"
                        key={i}
                        style={{
                          background: `linear-gradient(0deg, rgba(6, 46, 100, 0.8), rgba(6, 46, 100, 0.8)), url(${
                                info.imgUrl
                            }) no-repeat center`
                        }}
                    >
                        <div className="case-content">
                            <Card className="border-0 bg-transparent">
                                <CardBody>
                                    <CardTitle className="size-16 text-uppercase text-white">
                                        {info.title}
                                    </CardTitle>
                                    <CardText>
                                        <Button
                                            size="md"
                                            className="p-4 mt-1 border-radius-0 bg-transparent text-white border-color-white"
                                        >
                                            Read Now
                                        </Button>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
    );
  }
}

UseCase.propTypes = {};

export default UseCase;
