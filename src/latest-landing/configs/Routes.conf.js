import React from "react";
// import OurStory from "../home/OurStory/OurStory"
// import OurTeam from "../home/OurTeam/OurTeam";
// import Home from "../home/Home";
// import DefaultBody from "../layout/Default/Default";
// import News from "../home/News/News";
const Home = React.lazy(() => import("../home/Home"));
const DefaultBody = React.lazy(() => import("../layout/Default/Default")); // The default content page the web app will land on
const OurStory = React.lazy(() => import("../home/OurStory/OurStory"));
const OurTeam = React.lazy(() => import("../home/OurTeam/OurTeam"));
const News = React.lazy(() => import("../home/News/News"));

export default [
    {
        path: "",
        component: Home,
        exact: true,
        name: "Tunga Home",
        childRoutes: [
            {
                path: "/",
                component: DefaultBody,
                exact: true,
                name: "Home Landing"
            },
            {
                path: "/our-story",
                name: "Our Story",
                exact: false,
                component: OurStory
            },
            {
                path: "/our-team",
                name: "Our Team",
                exact: false,
                component: OurTeam
            },
            {
                path: "/news",
                name: "News",
                exact: false,
                component: News
            }
        ]
    }
];
