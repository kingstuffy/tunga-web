/***
 * Created by Kazeem Olanipekun
 * This is where all route declaration is done and reference to when routing to different pages.
 */

export default {
    home: { path: "/", name: "Tunga" },
    ourTeam: { path: "/our-team", name: "Our Team" },
    ourStory: { path: "/our-story", name: "Our Story" },
    news: { path: "/news", name: "News" },
    privacy: { path: "/privacy", name: "Privacy" },
    userAgreement: { path: "/agreement", name: "User Agreement" },
    join: { path: "/join", name: "Join" },
    codeOfConduct: { path: "/code-of-conduct", name: "Code Of Conduct" },
    blog: { path: "/blog", name: "Blog", loc: 'blog' },
    login: { path: "/login", name: "Log in", loc: 'login' },
    forgotPassword: { path: "/forgot-password", name: "Forgot Password" },
    resetPassword: { path: "/password/:uid/:token", name: "Reset Password" },
    devProfile: { path: "/dev-profile/:id", basePath: "/dev-profile", name: "Developer Profile" },
    dashboard: { path: "/dashboard", name: "Log in", loc: 'dashboard' },
};
