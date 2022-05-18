import {createRouter, createWebHistory} from "vue-router";
import Container from "./views/layuot/Container";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Dashboard from "./views/pages/Dashboard";
import UserProfile from "./views/pages/UserProfile";
import Middleware from "./middleware";
import store from "./store";


const routes = [
    {
        path: '/',
        name: 'container',
        component: Container
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            middleware: [Middleware.guest]
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            middleware: [Middleware.guest]
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            middleware: [Middleware.auth]
        },
        children: [
            {
                path: '/dashboard/user-profile',
                name: 'dashboard.user-profile',
                component: UserProfile,
                meta: {
                    middleware: [Middleware.auth, Middleware.isSubscribed]
                }
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0] ({
        ...context
    })
})

export default router;
