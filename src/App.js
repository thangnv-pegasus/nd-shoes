import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './config/routes'
import DefaultLayout from './components/DefaultLayout'
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false)
  const [thisAccount, setThisAccount] = useState()

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
                    thisAccount = {thisAccount}
                    login = {login}
                  >
                    <Element 
                      login = {login}
                      setLogin={setLogin}
                      thisAccount = {thisAccount}
                      setThisAccount={setThisAccount}
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
