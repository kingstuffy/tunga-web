import React from "react";

const Home = React.lazy(() => require("../home/Home"));
const DefaultBody = React.lazy(() => import("../layout/Default")); // The defaul home page the web app will land on
const OurStory = React.lazy(() => import("../home/aboutUs/AboutUs"));

export default [
    {
        path: '',
        component: Home,
        exact: true,
        name: 'Home Page',
        childRoutes: [
            {
                path: '/',
                component: HomeBody,
                exact: true,
                name: 'Home Landing',
            },
            {
                path: '/about-us',
                name: 'About Us',
                exact: false,
                component: AboutUs
            }
        ]
    },
];
