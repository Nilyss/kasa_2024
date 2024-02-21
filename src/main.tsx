import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// styles
import './utils/styles/global.scss'

// context
import { HousingProvider } from './context/HousingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HousingProvider>
    <App />
  </HousingProvider>,
)
