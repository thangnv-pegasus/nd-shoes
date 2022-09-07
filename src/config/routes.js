import routes from "../routes";
import Home from '../pages/Home'
import Intro from '../pages/Intro'
import Products from '../pages/Products'
import News from '../pages/News'
import Contact from '../pages/Contact'
import AccessoryItem from "../pages/AccessoryItem";
import DetailProduct from "../pages/DetailProduct";
import DetailBlog from "../pages/DetailBlog";
import ProductKind from "../pages/ProductKind";
import SearchPage from "../pages/SearchPage";
import Signin from "../pages/Account/SignIn";
import SignUp from "../pages/Account/SignUp";
import Member from '../pages/Member'
import Favorite from "../pages/Favorite";
import SizeProduct from "../pages/SizeProduct";

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
        path: routes.ProductKind,
        component: ProductKind
    },
    {
        path: routes.search,
        component: SearchPage
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
        path: routes.detailAcessory,
        component: DetailProduct
    },
    {
        path: routes.accessoryItem,
        component: AccessoryItem
    },
    {
        path: routes.signin,
        component: Signin
    },
    {
        path: routes.signup,
        component: SignUp
    },
    {
        path: routes.member,
        component: Member
    },
    {
        path: routes.favorite,
        component: Favorite
    },
    {
        path: routes.sizeProduct,
        component: SizeProduct
    }
]


const privateRoutes = [

]


export { publicRoutes }

