// types
import { ReactElement } from 'react'
import { IHousingContextType } from './context/HousingContext'

// hooks | libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // @https://www.npmjs.com/package/react-router-dom

// components
import Header from './components/header/Header'

// context
import { HousingContext } from './context/HousingContext'

// hooks
import { useEffect, useContext } from 'react'

function App(): ReactElement {
  const { getHousing, housing }: IHousingContextType =
    useContext(HousingContext)

  useEffect((): void => {
    getHousing()
      .catch((err) => console.error('Housing cannot be fetched : ', err))
      .finally(() => console.log('Housing fetched'))
  }, [])

    return (
    <>
      <Router>
        <Routes>
          {housing && <Route path="/" element={<Header data={housing} />} />}
          <Route path="*" />
        </Routes>
      </Router>
    </>
  )
}

export default App
