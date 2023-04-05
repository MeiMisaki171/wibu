import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publicRoutes } from './pages'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <Page />
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App