// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseState from './UseState.tsx'
import UseEffect from './UseEffect.tsx'
import UseMemo from './UseMemo.tsx'
import UseRef from './UseRef.tsx'
import UseContext from './UseContext.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <UseState />
  //   <UseEffect />
  // </StrictMode>,
  <>
    <UseContext />
  </>
)
