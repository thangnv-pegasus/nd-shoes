import routes from "../routes";
import Home from '../pages/Home'
import Intro from '../pages/Intro'
import Products from '../pages/Products'
import News from '../pages/News'
import Contact from '../pages/Contact'

const publicRoutes = [
    {
        path: routes.home,
        component: Home
    },
    {
        path: routes.intro,
        component: Intro
    },
    {
        path: routes.products,
        component: Products
    },
    {
        path: routes.news,
        component: News
    },
    {
        path: routes.contact,
        component: Contact
    }
]


const privateRoutes = [
    
]


export {publicRoutes}

