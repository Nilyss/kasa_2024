// types
import { ReactElement } from 'react'
import { IHousingContextType } from './context/HousingContext'

// hooks | libraries
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom' // @https://www.npmjs.com/package/react-router-dom

// layout
import Home from './layouts/home/Home'
import Housing from './layouts/housing/Housing'
import About from './layouts/about/About'
import ErrorLayout from './layouts/errorLayout/ErrorLayout'

// component
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// context
import { HousingContext } from './context/HousingContext'

// hooks
import { useEffect, useContext } from 'react'

function App(): ReactElement {
  const { getHousing }: IHousingContextType = useContext(HousingContext)
  const getLocalTime = () => {
    const now: Date = new Date()
    return now.toLocaleTimeString()
  }

  useEffect((): void => {
    getHousing()
      .catch((err) => console.error('Housing cannot be fetched : ', err))
      .finally(() =>
        console.log(
          'Housing datas was successfully fetched at : ',
          getLocalTime(),
        ),
      )
  }, [])

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/home'} />}></Route>
          <Route path="*" element={<Navigate to={'/404'} />} />
          <Route path={'/home'} element={<Home />}></Route>
          <Route path={'/housing/:id'} element={<Housing />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/404'} element={<ErrorLayout />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
