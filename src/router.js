import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./views/Main";
import About from "./views/About";
import Login from "./views/Login";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        {path:"/",component:Main},
        {path:"/about",component:About},
        {path:"/login",component:Login},
    ]
})

export default router;