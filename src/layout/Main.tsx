import * as React from 'react'
import { Route } from 'react-router'
import { Home, Login, SignUp } from '../component'

function Main(){
    return(
        <>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
        </>
    )
}

export default Main