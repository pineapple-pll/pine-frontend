import * as React from 'react'
import { useEffect } from 'react'
import { Route } from 'react-router'
import { Home, Login, SignUp } from '../component'
import { useRecoilState } from 'recoil'
import { authState } from '../recoil/auth'

function Main(){
    const [auth, setAuth] = useRecoilState(authState)
    useEffect(() => {
        if(localStorage.getItem('authorization')){
            let val = localStorage.getItem('authorization')
            val ? setAuth(JSON.parse(val)) : null
        }
    },[])

    return(
        <>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
        </>
    )
}

export default Main