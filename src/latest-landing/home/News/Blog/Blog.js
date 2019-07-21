import React, { Component } from "react";
import "./Blog.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Icon from "../../../shared/core/Icon";
import { Button } from "../../../shared/Form/Form";

class Blog extends Component {
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
        const articlesPerRow = parseInt(articles.length / 2, 10);
        const splitArticles = [
            articles.slice(0, articlesPerRow),
            articles.slice(articlesPerRow),
        ];
        const pagination = {
            total: articlesPerRow,
            perPage: this.getDataPerPage()
        };

        return (
            <section className="Blog">
                <div className="Blog__heading">
                    BLOG POSTS
                </div>
                <div className="Blog__container">
                    <Carousel
                        pagination={pagination}
                        float="float-right"
                        color="text-white"
                    >
                        <ul className="Blog__list" style={{ left: this.state.leftPosition }}>
                            {splitArticles.map(
                                (posts, i) => (
                                    <div
                                        key={i}
                                        className={`Blog__row Blog__row--${i}`}
                                    >
                                        {
                                            posts.map(
                                                (article, j) => (
                                                    <li className="Blog__item" key={j}
                                                        style={{ backgroundImage: `url(${article.imgUrl})`, height: "60vh" }}>
                                                        <div
                                                            className="Blog__item-container">
                                                            <div className="Blog__title">
                                                                {article.title}
                                                            </div>
                                                            <div className="Blog__summary">
                                                                {article.summary}
                                                            </div>
                                                            <div className="Blog__cta">
                                                                <Button
                                                                    size="md"
                                                                    className="btn Blog__btn btn-inverted"
                                                                    variant=""
                                                                    onClick={() => {
                                                                        window.open(article.url, '_blank');
                                                                    }}
                                                                >
                                                                    Read now
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="Blog__bg-mask"></div>
                                                    </li>
                                                )
                                            )}
                                    </div>
                                )
                            )}
                        </ul>
                    </Carousel>
                </div>
            </section>
        );
    }
}

Blog.propTypes = {};

export default Blog;
