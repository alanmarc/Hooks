import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'

import './index.css'
import { MemoHook } from './memos/MemoHook'
import { Memorize } from './memos/Memorize'
import { Layout } from './useLayoutEffect/Layout'
//import { FocusScreen } from './useRef/FocusScreen'
//import { MultipleCustomHook } from './examples/MultipleCustomHook'
//import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
//import { SimpleForm } from './useEffect/SimpleForm'
//import { CounterApp } from './useState/CounterApp'
//import { CounterCustomHook } from './useState/CounterCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MemoHook/>
  //</React.StrictMode>
)
