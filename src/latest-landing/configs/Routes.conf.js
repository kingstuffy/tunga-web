import React from "react";

const Home = React.lazy(() => require("../Home"));
const DefaultBody = React.lazy(() => require("../layout/Default/Default")); // The default content page the web app will land on
const OurStory = React.lazy(() => require("../components/OurStory/OurStory"));
const OurTeam = React.lazy(() => require("../components/OurTeam/OurTeam"));
const News = React.lazy(() => require("../components/News/News"));

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
