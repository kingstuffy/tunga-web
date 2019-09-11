import React, { Component } from "react";
import "./News.scss";
import Nav from "../../layout/Nav/Nav";

import TelegraafPicture from "../../assets/img/news/telegraaf-picture.jpg";
import TelegraafLogo from "../../assets/img/news/telegraaf-logo.png";
import SproutPicture from "../../assets/img/news/sprout-picture.jpg";
import SproutLogo from "../../assets/img/news/sprout-logo.png";
import AfricanTechRoundupPicture from "../../assets/img/news/african-tech-roundup-picture.jpg";
import AfricanTechRoundupLogo from "../../assets/img/news/african-tech-roundup-logo.jpg";
import BnrPicture from "../../assets/img/news/bnr-picture.jpg";
import BnrLogo from "../../assets/img/news/bnr-logo.png";
import RadobankPicture from "../../assets/img/news/rabobank-picture.jpg";
import RadobankLogo from "../../assets/img/news/rabobank-logo.jpg";
import AdPicture from "../../assets/img/news/ad-picture.jpg";
import AdLogo from "../../assets/img/news/ad-logo.png";

import blogArticles from './content/blogs';

import TeamImg from "../../assets/img/our-team/user.png";
import VlogImg from "../../assets/img/blog/vlog.png";
import VlogVideo from "../../assets/videos/home/section-1.mp4";
import NewsArticle from "./NewsArticle/NewsArticle";
import Vlog from "./Vlog/Vlog";
import Publications from "./Publications/Publications";
import Blog from "./Blog/Blog";
import Footer from "../../layout/Footer/Footer";
import PageScroll from "../../shared/PageScroll/PageScroll";
import { withRouter } from "react-router";
import qs from "qs";

const pages = [
    {
        hash: "NewsArticle",
        title: "News Articles",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "dark",
    },
    {
        hash: "VLOGS",
        title: "VLOGS",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64",
        theme: "light",
    },
    {
        hash: "Publications",
        title: "Publications",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64",
        theme: "dark",
    },
    {
        hash: "BLOGS",
        title: "Blog",
        isActive: false,
        isActiveBar: false,
        color: "#062E64",
        bgColor: "#062E64",
        theme: "dark",
    },
    {
        hash: "Contact",
        title: "Contact",
        isActive: false,
        isActiveBar: false,
        color: "#fff",
        bgColor: "#fff",
        theme: "dark",
    },
];

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                    title: 'Podium voor Afrikaans it-talent (Dutch)',
                    summary: 'In Afrika stikt het van het it-talent, maar banen zijn schaars. Tegelijkertijd heeft het westerse bedrijfsleven moeite met het vinden van goede softwareprogrammeurs. Online platform Tunga koppelt deze partijen en brengt zo de jeugdwerkloosheid in Afrika omlaag.',
                    imgUrl: TelegraafPicture,
                    logo: TelegraafLogo,
                    url: 'https://www.telegraaf.nl/financieel/1876342/podium-voor-afrikaans-it-talent?utm_source=tunga.io&utm_medium=referral&utm_content=/',
                },
                {
                    title: 'Deze Nederlandse startup laat websites en apps bouwen door Afrikaanse jongeren (Dutch)',
                    summary: 'Tunga koppelt bedrijven en organisaties die software willen laten bouwen aan software-programmeurs. Niets nieuws onder de zon, zou je zeggen, maar hier is toch wel iets bijzonders aan de hand.',
                    imgUrl: SproutPicture,
                    logo: SproutLogo,
                    url: 'https://www.sprout.nl/artikel/startup-van-de-week/deze-nederlandse-startup-laat-websites-en-apps-bouwen-door-afrikaanse',
                },
                {
                    title: 'Tunga plugging the world into African coding talent',
                    summary: 'Ernesto Spruyt chatted to Andile Masuku to discuss what prompted Ernesto to come to Africa looking for coding talent, and what he reckons African coders who aspire to have international careers ought to be keeping top of mind.',
                    imgUrl: AfricanTechRoundupPicture,
                    logo: AfricanTechRoundupLogo,
                    url: 'https://soundcloud.com/african-tech-round-up',
                },
                {
                    title: 'Our developers don’t want aid, they want to be productive',
                    summary: 'Last week in Ivory Coast there was a top between African and European leaders to discuss future strategies to among others create youth employment on the African continent. Leading Dutch radio station BNR invited Tunga founder Ernesto Spruyt, along with Irene Visser of the Netherlands African Business Council (NABC) and journalist-turned-entrepreneur Hans Moleman, to discuss what role European companies can play in these developments.',
                    imgUrl: BnrPicture,
                    logo: BnrLogo,
                    url: 'https://blog.tunga.io/our-developers-dont-want-aid-they-want-to-be-productive-4aba9173211e',
                },
                {
                    title: 'Tunga: de schakel tussen westerse bedrijven en Afrikaanse programmeurs',
                    summary: 'Veel bedrijven staan te springen om softwareprogrammeurs. Maar door de grote vraag zijn goede IT’ers moeilijk te vinden. Tunga bedacht een oplossing: het koppelt jonge Afrikaanse programmeurs aan bedrijven in Nederland en andere westerse landen.',
                    imgUrl: RadobankPicture,
                    logo: RadobankLogo,
                    url: 'https://www.rabobank.nl/bedrijven/groei/personeel/afrikaanse-programmeurs/',
                },
                {
                    title: 'Schreeuwend tekort aan ict\'ers: dit Nederland­se bureau werft in Afrika',
                    summary: 'Het is een oplossing voor het schreeuwende tekort aan ICT’ers: hulptroepen uit Afrika springen online bij via de Nederlandse start-up Tunga.',
                    imgUrl: AdPicture,
                    logo: AdLogo,
                    url: 'https://www.ad.nl/ad-werkt/schreeuwend-tekort-aan-ict-ers-dit-nederland-se-bureau-werft-in-afrika~a8a8cff9',
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
            blogArticles,
        };
    }

    render() {
        const splitHash = this.props.history.location.hash.split('?');
        const urlQuery = splitHash.length > 1 ? splitHash[1] : '';
        const { publication } = qs.parse(urlQuery);

        return (
            <section className="News">
                <PageScroll pages={pages}>
                    <div id="NewsArticle" className="News__news-article">
                        <div className="News__nav">
                            <Nav/>
                        </div>
                        <NewsArticle articles={this.state.articles}/>
                    </div>
                    <div id="VLOGS" className="News__vlog">
                        <Vlog vlogs={this.state.vlogs}/>
                    </div>
                    <div id="Publications" className="News__white-paper">
                        <Publications history={this.props.history} publicationQuery={publication}/>
                    </div>
                    <div id="BLOGS" className="News__blog">
                        <Blog articles={this.state.blogArticles}/>
                    </div>
                    <Footer/>
                </PageScroll>
            </section>
        );
    }
}

News.propTypes = {};

const NewsWithRouter = withRouter(News);


export default NewsWithRouter;
