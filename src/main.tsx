import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//STYLES
import './index.css'

//REACT ROUTER DOM
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      router={ router }
    />
  </StrictMode>,
)
