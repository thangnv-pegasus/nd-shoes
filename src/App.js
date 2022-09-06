import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './config/routes'
import DefaultLayout from './components/DefaultLayout'
import { Fragment, useEffect, useState } from 'react';
import data from './data/db.json'
import { BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';

const products = data.products

const productsFavorit = products.map(item => ({...item, favorite: false}))

function App() {

  const [login, setLogin] = useState(false)
  const [thisAccount, setThisAccount] = useState()
  const [cart, setCart] = useState([])
  const [allProduct, setAllProduct] = useState(productsFavorit)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((routeI, index) => {
              let Layout = DefaultLayout
              if (routeI.layout) {
                Layout = routeI.layout
              }
              else if(routeI.layout == 'null'){
                Layout = Fragment
              }
              let Element = routeI.component
              return (
                <Route
                  key={index}
                  path={routeI.path}
                  element={
                    <Layout
                      setLogin={setLogin}
                      thisAccount={thisAccount}
                      login={login}
                      cart={cart}
                      allProduct={allProduct}
                    >
                      <Element
                        login={login}
                        setLogin={setLogin}
                        thisAccount={thisAccount}
                        setThisAccount={setThisAccount}
                        setCart={setCart}
                        cart={cart}
                        setAllProduct={setAllProduct}
                        allProduct={allProduct}
                      />
                    </Layout>
                  }
                />
              )
            })
          }
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
