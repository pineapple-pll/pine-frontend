import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authState } from '../recoil/auth'

function Home(){
    const history = useHistory()
    const [auth, setAuth] = useRecoilState(authState)

    function LogOut(){
        localStorage.removeItem('authorization')
        setAuth({id: '', token: ''})
    }

    return(
        <>
            Home Page
            <div style={{ float: 'right' }}>
                {auth.token ? 
                (<>
                    <span>Welcome to <span style={{ fontWeight: 'bold' }}>{auth.id}</span></span>
                    <span>
                        <button onClick={() => LogOut()}>LogOut</button>
                    </span>
                </>) :
                (<>
                    <span>
                        <button onClick={() => history.push('/login')}>go to Login</button>
                    </span>
                    <span>
                        <button onClick={() => history.push('/signup')}>go to SignUp</button>
                    </span>
                </>)}
            </div>
        </>
    )
}

export default Home