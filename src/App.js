import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './config/routes'
import DefaultLayout from './components/DefaultLayout'

function App() {
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
                  <Layout>
                    <Element />
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
