import routes from "../routes";
import Home from '../pages/Home'
import Intro from '../pages/Intro'
import Products from '../pages/Products'
import News from '../pages/News'
import Contact from '../pages/Contact'
import AccessoryItem from "../pages/AccessoryItem";
import Accessory from "../pages/Accessory";
import DetailProduct from "../pages/DetailProduct";
import DetailBlog from "../pages/DetailBlog";
import ProductKind from "../pages/ProductKind";

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
    },
    {
        path: routes.accessoryItem,
        component: AccessoryItem
    },
    {
        path: routes.accessory,
        component: Accessory
    },
    {
        path: routes.detailProduct,
        component: DetailProduct
    },
    {
        path: routes.detailBlog,
        component: DetailBlog
    },
    {
        path: routes.ProductKind,
        component: ProductKind
    }
]


const privateRoutes = [
    
]


export {publicRoutes}

