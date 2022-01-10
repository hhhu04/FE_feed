import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./views/Main";
import About from "./views/About";
import Login from "./views/Login";
import NewFeed from "./views/feed/NewFeed";
import FeedDetail from "./views/feed/FeedDetail";
import MyPage from "./views/MyPage"
import Social from './views/Social'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        {path:"/",component:Main},
        {path:"/about",component:About},
        {path:"/login",component:Login},
        {path:"/feed/new",component:NewFeed},
        {path:"/feed/:id",component:FeedDetail},
        {path:"/mypage",component:MyPage},
        {path:"/social",component:Social},
    ]
})

export default router;