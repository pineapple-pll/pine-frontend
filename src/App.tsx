import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './layout/Main'

function App(){
    return(
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    )
}

export default App