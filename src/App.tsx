import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Main } from './layout'
import { RecoilRoot } from 'recoil'

function App(){
    return(
        <BrowserRouter>
            <RecoilRoot>
                <Main/>
            </RecoilRoot>
        </BrowserRouter>
    )
}

export default App