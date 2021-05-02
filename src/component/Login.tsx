import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import { authState } from '../recoil/auth'

function Login(){
    const [id, setId] = useState<string>('')
    const [pw, setPw] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [auth, setAuth] = useRecoilState(authState)
    const history = useHistory()

    useEffect(() => {
    },[])

    async function handleLogin(id : string, password : string){
        try{
            setLoading(true)
            const res = await axios.post('http://183.98.69.129/auth/members/signin', {
                memberId: id,
                password: password
            })
            if(res.status === 200){
                alert('success login')
                const val = { id: id, token: res.data }
                setAuth({...val})
                history.push('/')
            }
        }catch(error){
            alert('fail login')
            throw error
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="login" style={loading ? {backgroundColor: 'rgb(0, 0, 0, 0.1)'} : {}}>
            <h2 className="tit">Login</h2>
            <div className="login-form">
                <label>
                    <input 
                        type="text"
                        name="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Pineapple ID"
                    />
                </label>                    
                <label>
                    <input 
                        type="text" 
                        name="pw"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        placeholder="암호"
                    />
                </label>
                <p className="login-form-btn">
                    <button onClick={() => handleLogin(id, pw)}>LOGIN</button>
                </p>
            </div>
            {/* <div className="login-go-signin">
                <p>Pineapple 회원이 아니라면 <a href="sign-in.html">여기</a>를 클릭해 주세요.</p>
            </div> */}
        </div>
        // <div style={loading ? {backgroundColor: 'rgb(0, 0, 0, 0.1)'} : {}}>
        //     Login Page
        //     <div>
        //         <span>ID: </span>
        //         <input
        //             type="text"
        //             value={id}
        //             onChange={(e) => setId(e.target.value)}
        //         />
        //     </div>
        //     <div>
        //         <span>PASSWOD: </span>
        //         <input
        //             type="text"
        //             value={pw}
        //             onChange={(e) => setPw(e.target.value)}
        //         />
        //     </div>
        //     <button onClick={() => handleLogin(id, pw)}>LOGIN</button>
        // </div>
    )
}

export default Login