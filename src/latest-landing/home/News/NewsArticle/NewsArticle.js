import React, { Component } from "react";
import "./NewsArticle.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Button from "../../../shared/core/Button";

class NewsArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            leftPosition: 0,
        };
    }


    getDataPerPage() {
        return [
            {
                breakpoint: 992,
                perPage: 1,
            },
            {
                breakpoint: 768000,
                perPage: 2,
            },
        ];
    }


    render() {
        const { articles } = this.props;
        const pagination = {
            total: articles.length,
            perPage: this.getDataPerPage()
        };

        return (
            <section className="NewsArticle">
                <h4 className="NewsArticle__heading">
                    News Article
                </h4>
                <div className="NewsArticle__container">
                    <Carousel
                        pagination={pagination}
                        float="float-right"
                        color="text-primary"
                    >
                        <ul className="NewsArticle__list" style={{ left: this.state.leftPosition }}>
                            {
                                articles.map((article, key) => (
                                    <li className="NewsArticle__item" key={key}
                                        style={{ backgroundImage: `url(${article.imgUrl})` }}>
                                        <div className="NewsArticle__item-container">
                                            <div className="NewsArticle__title">
                                                {article.title}
                                            </div>
                                            <div className="NewsArticle__summary">
                                                {article.summary}
                                            </div>
                                            <div className="NewsArticle__cta">
                                                <Button
                                                    size="md"
                                                    className="btn NewsArticle__btn btn-inverted"
                                                    variant=""
                                                >
                                                    Read now
                                                </Button>
                                            </div>
                                            <div className="NewsArticle__logo-holder">
                                                <img src={article.logo} className="NewsArticle__logo"/>
                                            </div>
                                        </div>
                                        <div className="NewsArticle__bg-mask"></div>
                                    </li>
                                ))
                            }
                        </ul>
                    </Carousel>
                </div>
            </section>
        );
    }
}

NewsArticle.propTypes = {};

export default NewsArticle;
