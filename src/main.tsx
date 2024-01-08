import React from 'react'
import ReactDOM from 'react-dom/client'

// import { CounterApp } from './01-useState/CounterApp';
import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
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
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    <Memorize />
  </React.StrictMode>,
)
