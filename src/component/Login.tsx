import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import { authState } from '../recoil/auth'
import Swal from 'sweetalert2'

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
            Swal.fire({
                title: 'Login.....',
                didOpen: () => {
                    Swal.showLoading()
                }
            })
            setLoading(true)
            const res = await axios.post('http://183.98.69.129/auth/members/signin', {
                memberId: id,
                password: password
            })
            if(res.status === 200){
                const val = { id: id, token: res.data }
                setAuth({...val})
                localStorage.setItem('authorization', JSON.stringify(val))
                Swal.fire({
                    icon: 'success',
                    title: 'Success Login'
                }).then(result => {
                    if(result.isConfirmed){
                        history.push('/')
                    }else{
                        history.push('/')
                    }
                })
            }
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Fail Login'
            })
            throw error
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="login">
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
        </div>
    )
}

export default Login