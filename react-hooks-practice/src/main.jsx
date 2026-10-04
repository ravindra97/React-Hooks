import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppMap from './jsMethods/mapMethod.jsx'
import AppConcat from './jsMethods/concatMethod.jsx'
import AppEvery from './jsMethods/everyMethod.jsx'
import AppFilter from './jsMethods/filterMethod.jsx'
import AppFindIndex from './jsMethods/findIndexMethod.jsx'
import AppFind from './jsMethods/findMethod.jsx'
import AppFlat from './jsMethods/flatMethod.jsx'
import AppReduce from './jsMethods/reduceMedthod.jsx'
import AppReverse from './jsMethods/reverseMethod.jsx'
import AppSlice from './jsMethods/sliceMethod.jsx'
import AppSort from './jsMethods/sliceMethod.jsx'
import AppSpread from './jsMethods/spreadOperator.jsx'

import AppUseStateHook from './hooksImplement/useStateHook.jsx'
import AppUseEffectHook from './hooksImplement/useEffectHook.jsx'
import AppUseContextHook from './hooksImplement/useContextHook.jsx'

//Use the Componenet from above imported statment to check it's output
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppUseContextHook />
  </StrictMode>,
)
