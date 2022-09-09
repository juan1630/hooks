import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWidthCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayout/Layout'
import { CallBackHook } from './06-memos/CallBackHook'
import { Memorize } from './06-memos/memorize'
import { MemoHook } from './06-memos/MeomoHook'
import { Padre } from './07-tarea-memo/Padre'
import { MultipleCustomHook } from './examples/MulitpleCustomHooks'
import { HooksApp } from './HooksApp'
import './index.css'

// import './08-useReducer/introReducer';
import { TodoApp } from './08-useReducer/TodoApp'

//     {/* <HooksApp /> */}
//     {/* <CounterApp className="btn btn-info" /> */}
//     {/* <CounterWidthCustomHook /> */}
//     {/* <SimpleForm /> */}
//     {/* <FormWithCustomHook /> */}
//     {/* <MultipleCustomHook /> */}
//     {/* <FocusScreen /> */}
//     {/* <Layout /> */}
//     {/* <Memorize /> */}
//     {/* <MemoHook /> */}
//     {/* <CallBackHook /> */}
//     <Padre />
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <TodoApp />
  // </React.StrictMode>
)
