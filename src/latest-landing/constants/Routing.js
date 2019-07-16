/***
 * Created by Kazeem Olanipekun
 * This is where all route declaration is done and reference to when routing to different pages.
 */

export default {
  home: { path: "/", name: "Tunga" },
  ourTeam: { path: "/our-team", name: "Our Team" },
  ourStory: { path: "/our-story", name: "Our Story" },
  news: { path: "/news", name: "News" },
  blog: { path: "/blog", name: "Blog", loc: 'blog' },
  login: { path: "/login", name: "Log in", loc: 'login' },
  devProfile: { path: "/dev-profile/:id", basePath: "/dev-profile", name: "Developer Profile" },
};
