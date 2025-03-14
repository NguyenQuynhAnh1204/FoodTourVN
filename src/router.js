import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/HomePage/home";
import Tour from "./pages/users/ToursPage/home";
import Blog from "./pages/users/BlogsPage/home";
import BlogDetail from "./pages/users/BlogDetails";
import TourDetail from "./pages/users/TourDetails/home";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/Theme/MasterLayout";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        }, 
        {
            path: ROUTERS.USER.TOURS,
            component: <Tour/>
        },
        {
            path: ROUTERS.USER.BLOGS,
            component: <Blog/>,
        }, 
        {
            path: ROUTERS.USER.BLOG_DETAIL,
            component: <BlogDetail/>,
        },
        {
            path: ROUTERS.USER.TOUR_DETAIL,
            component: <TourDetail/>,
        }
    ]
    return (
        <MasterLayout>
            <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key = {key} path = {item.path} element = {item.component}/>
                ))
            }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;