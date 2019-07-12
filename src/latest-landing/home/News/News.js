import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import "./News.scss";
import Nav from "../../layout/Nav/Nav";
import TeamImg from "../../assets/img/our-team/user.png";
import VlogImg from "../../assets/img/blog/vlog.png";
import VlogVideo from "../../assets/videos/home/section-1.mp4";
import NewsArticle from "./NewsArticle/NewsArticle";
import Vlog from "./Vlog/Vlog";
import WhitePaper from "./WhitePaper/WhitePaper";
import Blog from "./Blog/Blog";
import Routing from "../../constants/Routing";
import  SideNav from "../../../components/sidenav";
import Footer from "../../layout/Footer/Footer";

const pages = [
    {
        hash: "NewsArticle",
        title: "News Article",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
    {
        hash: "VLOGS",
        title: "VLOGS",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "WhitePaper",
        title: "White Paper",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "BLOGS",
        title: "BLOGS",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64"
    },
    {
        hash: "Footer",
        title: "Footer",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff"
    },
];

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                    title: 'Title of the news article goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    logo: TeamImg,
                },
                {
                    title: 'Title of the news article goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    logo: TeamImg,
                },
                {
                    title: 'Title of the news article goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    logo: TeamImg,
                },
                {
                    title: 'Title of the news article goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    logo: TeamImg,
                },
            ],
            vlogs: [
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
                {
                    title: 'Video title goes here',
                    imgUrl: VlogImg,
                    videoUrl: VlogVideo,
                },
            ],
            blogArticles: [
                {
                    title: 'Title of the blog post goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    url: Routing.blog.path,
                },
                {
                    title: 'Title of the blog post goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    url: Routing.blog.path,
                },
                {
                    title: 'Title of the blog post goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    url: Routing.blog.path,
                },
                {
                    title: 'Title of the blog post goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    url: Routing.blog.path,
                },
                {
                    title: 'Title of the blog post goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    url: Routing.blog.path,
                },
                {
                    title: 'Title of the blog post goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    url: Routing.blog.path,
                },
                {
                    title: 'Title of the blog post goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    url: Routing.blog.path,
                },
                {
                    title: 'Title of the blog post goes here',
                    summary: 'Yeah, but your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should. My dad once told me, laugh and the world laughs with you...',
                    imgUrl: TeamImg,
                    url: Routing.blog.path,
                },
            ]
        };
    }

    goToPage = (pageNumber) => {
        return this.reactPageScroller.goToPage(pageNumber)
    }

    pageOnChange = (pageNumber) => {
        console.log("current page", pageNumber)
    }

    render() {
        return (
            <section className="News">
                <ReactPageScroller  ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
                    <div id="NewsArticle" className="News__news-article">
                        <div className="News__nav">
                            <Nav/>
                        </div>
                        <NewsArticle articles={this.state.articles}/>
                    </div>
                    <div id="VLOGS" className="News__vlog">
                        <Vlog vlogs={this.state.vlogs}/>
                    </div>
                    <div id="WhitePaper" className="News__white-paper">
                        <WhitePaper/>
                    </div>
                    <div id="BLOGS" className="News__blog">
                        <Blog articles={this.state.blogArticles}/>
                    </div>
                    <Footer />
                </ReactPageScroller>
                <SideNav pages={pages} goToPage={this.goToPage}/>
            </section>
        );
    }
}

News.propTypes = {};

export default News;
