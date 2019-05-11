import React from "react";
import OurStory from "../components/OurStory/OurStory"
import OurTeam from "../components/OurTeam/OurTeam";
import Home from "../Home";
import DefaultBody from "../layout/Default/Default";
import News from "../components/News/News";
// const Home = React.lazy(() => import("../Home"));
// const DefaultBody = React.lazy(() => import("../layout/Default/Default")); // The default content page the web app will land on
// const OurStory = React.lazy(() => import("../components/OurStory/OurStory"));
// const OurTeam = React.lazy(() => import("../components/OurTeam/OurTeam"));
// const News = React.lazy(() => import("../components/News/News"));

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
