import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './config/routes'
import DefaultLayout from './components/DefaultLayout'
import { useEffect, useState } from 'react';
import data from './data/db.json'

const products = data.products

function App() {

  const [login, setLogin] = useState(false)
  const [thisAccount, setThisAccount] = useState()
  const [cart, setCart] = useState([])
  const [allProduct, setAllProduct] = useState(products.map(item=> ({...item,favorite: false}) ))
  
  return (
    <div className="App">
      <Routes>
        {
          publicRoutes.map((routeI, index) => {
            let Layout = DefaultLayout
            if (routeI.layout) {
              Layout = routeI.layout
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
                    cart = {cart}
                    allProduct = {allProduct}
                  >
                    <Element
                      login={login}
                      setLogin={setLogin}
                      thisAccount={thisAccount}
                      setThisAccount={setThisAccount}
                      setCart = {setCart}
                      setAllProduct = {setAllProduct}
                      allProduct = {allProduct}
                    />
                  </Layout>
                }
              />
            )
          })
        }
      </Routes>
    </div>
  );
}

export default App;
