import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './config/routes'
import DefaultLayout from './components/DefaultLayout'
import { Fragment, useEffect, useState } from 'react';
import data from './data/db.json'
import NotFound from './pages/NotFound';

const products = data.products

function App() {

  const [login, setLogin] = useState(false)
  const [thisAccount, setThisAccount] = useState()
  const [cart, setCart] = useState([])

  const [mail, setMail] = useState()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [note, setNote] = useState()


  // const handleFavoriteSneaker = (product) => {
  //   const thisProduct = allProduct.find(item => item.id === product.id)
  //   let newArr;
  //   if (thisProduct) {
  //     newArr = allProduct.map(item => {
  //       if (item.id === product.id) {
  //         return ({ ...item, favorite: !(item.favorite) })
  //       } else {
  //         return ({ ...item })
  //       }
  //     })
  //   }
  //   setAllProduct([...newArr])
  // }

  return (

    <div className="App">
      <Routes>
        {
          publicRoutes.map((routeI, index) => {
            let Layout = DefaultLayout
            let check = true;
            if (routeI.layout) {
              Layout = routeI.layout
            }
            else if (routeI.layout === null) {
              Layout = Fragment
              check = false;
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
                  >
                    <Element
                      login={login}
                      setLogin={setLogin}
                      thisAccount={thisAccount}
                      setThisAccount={setThisAccount}
                      setCart={setCart}
                      cart={cart}
                      mail={mail}
                      setMail={setMail}
                      name={name}
                      setName={setName}
                      phone={phone}
                      setPhone={setPhone}
                      address={address}
                      setAddress={setAddress}
                      note={note}
                      setNote={setNote}
                    />
                  </Layout>
                }
              />
            )
          })
        }
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
