import React, { Component } from "react";
import { connect } from "react-redux";
import "./Blog.scss";
import Carousel from "../../../shared/Carousel/Carousel";
import Icon from "../../../shared/core/Icon";
import { Button } from "../../../shared/Form/Form";
import { fetchBlogsRequest } from "../../../../services/blogs/actions";
import Loader from "../../../shared/Loader/Loader";

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


    componentWillMount() {
        this.loadData(this.props.query);
    }


    loadData(search) {
        this.props.fetchBlogsRequest({ search, limit: 12 });
    }


    render() {
        const { blogs: articles, is } = this.props;
        let articlesPerRow = parseInt(articles.length / 2, 10);
        articlesPerRow = articlesPerRow < 2 ? 2 : articlesPerRow;
        const splitArticles = [
            articles.slice(0, articlesPerRow),
        ];
        if (articles.length > articlesPerRow) {
            splitArticles.push(articles.slice(articlesPerRow));
        }

        const pagination = {
            total: articlesPerRow,
            perPage: this.getDataPerPage()
        };

        return (
            <section className="Blog">
                <div className="Blog__heading">
                    BLOG POSTS
                </div>
                <div className="Blog__container">{
                    is.fetching
                        ?
                        <div className="BlogPool__loader">
                            <Loader/>
                        </div>
                        :
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
                                                            style={{
                                                                backgroundImage: `url(${article.image})`,
                                                                height: "60vh"
                                                            }}>
                                                            <div
                                                                className="Blog__item-container">
                                                                <div className="Blog__title">
                                                                    {article.title}
                                                                </div>
                                                                <div className="Blog__summary">
                                                                    {article.subtitle}
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
                }
                </div>
            </section>
        );
    }
}

Blog.propTypes = {};


const mapStateToProps = state => ({
    is: state.app.blogs.blogs.is,
    blogs: state.app.blogs.blogs.blogList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogsRequest: (params) => dispatch(fetchBlogsRequest(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
