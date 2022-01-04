import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./views/Main";
import About from "./views/About";
import Login from "./views/Login";
import NewFeed from "./views/NewFeed";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        {path:"/",component:Main},
        {path:"/about",component:About},
        {path:"/login",component:Login},
        {path:"/feed/new",component:NewFeed},
    ]
})

export default router;