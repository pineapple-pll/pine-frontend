import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Home(){
    const history = useHistory()
    return(
        <>
            Home Page
            <div style={{ float: 'right' }}>
                <span>
                    <button onClick={() => history.push('/login')}>go to Login</button>
                </span>
                <span>
                    <button onClick={() => history.push('/signup')}>go to SignUp</button>
                </span>
            </div>
        </>
    )
}

export default Home