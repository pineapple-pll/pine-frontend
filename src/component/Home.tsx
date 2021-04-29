import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Home(){
    const history = useHistory()
    return(
        <>
            Home Page
            <div>
                <button onClick={() => history.push('/login')}>go to Login</button>
            </div>
            <div>
                <button onClick={() => history.push('/signup')}>go to SignUp</button>
            </div>
        </>
    )
}

export default Home