import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterCustomHookApp } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterCustomHookApp /> */}
    {/* <SimpleForm /> */}
    <MultipleCustomHooks />
  </React.StrictMode>,
)
