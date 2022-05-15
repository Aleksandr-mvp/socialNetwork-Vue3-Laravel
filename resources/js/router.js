import { createRouter, createWebHistory } from "vue-router";
import Container from "./views/layuot/Container";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Dashboard from "./views/pages/Dashboard";
import UserProfile from "./views/pages/UserProfile";


const routes = [
    {
        path: '/',
        name: Container,
        component: Container
    },
    {
        path: '/login',
        name: Login,
        component: Login
    },
    {
        path: '/register',
        name: Register,
        component: Register
    },
    {
        path: '/dashboard',
        name: Dashboard,
        component: Dashboard
    },
    {
        path: '/userProfile',
        name: UserProfile,
        component: UserProfile
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
