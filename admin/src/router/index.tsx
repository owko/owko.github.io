import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const About = lazy(() => import("../views/About"));
const Home = lazy(() => import("../views/Home"));
const Guide = lazy(() => import("../views/Guide"));
const Introduction = lazy(() => import("../views/Introduction"))
const IntroductionDetail = lazy(() => import("../views/IntroductionDetail"));
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)
//auth为权限校验判断符
interface Route {
    path: string,
    element: JSX.Element,
    auth?: boolean
}
const routes: Route[] = [
    {
        path: "/",
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: "/home",
        element: withLoadingComponent(<Home />)
    },
    {
        path: "/about",
        element: withLoadingComponent(<About />)
    },
    {
        path: "/guide",
        element: withLoadingComponent(<Guide />)
    },
    {
        path: "/introduction",
        element: withLoadingComponent(<Introduction />)
    },
    {
        path: "/introductionDetail/:header",
        element: withLoadingComponent(<IntroductionDetail />)
    }
]
//路由守卫
export const RouterBeforeEach = ({ children }: any) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigator = useNavigate()
    useEffect(() => {
        console.log('路由拦截');
        
        let router = getCurrentRouterMap(routes, location.pathname)
        if(!dispatch({type:'getToken'})&&localStorage.getItem('User_Token')){
            dispatch({type:'setToken',val:localStorage.getItem('User_Token')})
        }
        if (dispatch({type:'getToken'}) && router.auth) {
            navigator('/login')
        }
    }, [location.pathname]);
    return children
}
const getCurrentRouterMap = (routers:Route[], path: string): Route => {
    for (let router of routers) {
        if (router.path == path) return router;
    }
    return routes[routes.length - 1]
}
export default routes;