import React from "react";
import OurStory from "../home/OurStory/OurStory";
import OurTeam from "../home/OurTeam/OurTeam";
import Home from "../home/Home";
import DefaultBody from "../layout/Default/Default";
import News from "../home/News/News";
import Login from "../home/Login/Login";
import Routing from "../constants/Routing";
import BlogPage from "../home/BlogPage/BlogPage";
import DevProfile from "../home/DevProfile/DevProfile";
import Dashboard from '../../components/App';

export default [
    {
        path: "",
        component: Home,
        exact: true,
        name: Routing.home.name,
        childRoutes: [
            {
                path: Routing.home.path,
                component: DefaultBody,
                exact: true,
                name: Routing.home.name
            },
            {
                path: Routing.ourStory.path,
                name: Routing.ourStory.name,
                exact: false,
                component: OurStory
            },
            {
                path: Routing.ourTeam.path,
                name: Routing.ourTeam.name,
                exact: false,
                component: OurTeam
            },
            {
                path: Routing.news.path,
                name: Routing.news.name,
                exact: false,
                component: News
            },
            {
                path: Routing.login.path,
                name: Routing.login.name,
                exact: false,
                component: Login
            },
            {
                path: Routing.blog.path,
                name: Routing.blog.name,
                exact: false,
                component: BlogPage
            },
            {
                path: Routing.devProfile.path,
                name: Routing.devProfile.name,
                exact: false,
                component: DevProfile
            },
            {
                path: "/dashboard",
                component: Dashboard,
                exact: true,
                name: "dashboard"
            },
            {
                path: "/projects",
                component: Dashboard,
                exact: true,
                name: "projects"
            },
            {
                path: "/network",
                component: Dashboard,
                exact: true,
                name: "network"
            },
            {
                path: "/payments",
                component: Dashboard,
                exact: true,
                name: "payments"
            },
            {
                path: "/settings",
                component: Dashboard,
                exact: true,
                name: "settings"
            },
            {
                path: "/onboard",
                component: Dashboard,
                exact: true,
                name: "onboard"
            },
            {
                path: "/work",
                component: Dashboard,
                exact: true,
                name: "work"
            },
            {
                path: "/proposal",
                component: Dashboard,
                exact: true,
                name: "proposal"
            },
        ]
    }
];
