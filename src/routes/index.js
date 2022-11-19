const routes = {
    home: '/',
    intro: '/intro',
    products: '/collections/:classI',
    news: '/news',
    contact: '/contact',
    accessoryItem: '/accessory/:namePage',
    detailAcessory: '/accessory/detail/:accessoryId',
    detailProduct: '/product/:productId',
    detailBlog: '/blog/:blogId',
    ProductKind: '/productKind/:kind',
    search: '/search/:searchValue',
    signin: '/account/signin',
    signup: '/account/signup',
    member: '/member',
    favorite: '/favorite',
    cart: '/cart',
    sizeProduct: '/sizeProduct',
    order: '/orderPage',
    complete: '/complete'
}

export default routes