const routes = {
    home: '/',
    intro: '/intro',
    products: '/:classI',
    news: '/news',
    contact: '/contact',
    accessoryItem: '/accessory/:namePage',
    detailAcessory: '/accessory/detail/:accessoryId',
    detailProduct: '/product/:productId',
    detailBlog: '/blog/:blogId',
    ProductKind: '/productKind/:kind',
    search: '/search/:searchValue',
    signin: '/account/signin',
    signup: '/account/signup'
}

export default routes