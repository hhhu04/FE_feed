import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./views/Main";
import About from "./views/About";
import Login from "./views/Login";
import Join from "./views/Join";
import JoinKakao from "./views/JoinKakao";
import NewFeed from "./views/feed/NewFeed";
import FeedDetail from "./views/feed/FeedDetail";
import MyPage from "./views/MyPage"
import Social from './views/Social'
import Store from "./views/store/Store"
import NewItem from "./views/store/NewItem"
import ItemDetail from "./views/store/ItemDetail"
import Basket from "./views/Basket"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        {path:"/",component:Main},
        {path:"/about",component:About},
        {path:"/login",component:Login},
        {path:"/join",component:Join},
        {path:"/join/kakao/:email",component:JoinKakao},
        {path:"/feed/new",component:NewFeed},
        {path:"/feed/:id",component:FeedDetail},
        {path:"/mypage",component:MyPage},
        {path:"/social",component:Social},
        {path:"/store",component:Store},
        {path:"/store/new",component:NewItem},
        {path:"/store/:id",component:ItemDetail},
        {path:"/basket",component:Basket},
    ]
})

export default router;