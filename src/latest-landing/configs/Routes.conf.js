import React from "react";
import OurStory from "../home/OurStory/OurStory";
import OurTeam from "../home/OurTeam/OurTeam";
import Home from "../home/Home";
import DefaultBody from "../layout/Default/Default";
import News from "../home/News/News";
import Routing from "../constants/Routing";
import BlogPage from "../home/BlogPage/BlogPage";
import DevProfile from "../home/DevProfile/DevProfile";

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
    ]
  }
];
